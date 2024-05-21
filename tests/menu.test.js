const { ApolloServer } = require('apollo-server');
const typeDefs = require('../src/schemas/typeDefs');
const resolvers = require('../src/resolvers');
const { createTestClient } = require('apollo-server-testing');

const server = new ApolloServer({ typeDefs, resolvers });
const { query, mutate } = createTestClient(server);

describe('GraphQL API', () => {
  it('fetches menu items', async () => {
    const res = await query({ query: `
      query {
        menuItems {
          id
          category
          name
          description
          price
        }
      }
    `});
    expect(res.errors).toBeUndefined();
    expect(res.data.menuItems).toBeInstanceOf(Array);
  });

  it('adds a menu item', async () => {
    const res = await mutate({ mutation: `
      mutation {
        addMenuItem(category: "Appetizer", name: "Test Item", description: "Test Desc", price: 9.99) {
          id
          category
          name
          description
          price
        }
      }
    `});
    expect(res.errors).toBeUndefined();
    expect(res.data.addMenuItem.name).toBe("Test Item");
  });

  it('updates a menu item', async () => {
    const addRes = await mutate({ mutation: `
      mutation {
        addMenuItem(category: "Appetizer", name: "Update Test", description: "Update Desc", price: 5.99) {
          id
        }
      }
    `});
    const id = addRes.data.addMenuItem.id;

    const updateRes = await mutate({ mutation: `
      mutation {
        updateMenuItem(id: "${id}", name: "Updated Name") {
          id
          name
        }
      }
    `});
    expect(updateRes.errors).toBeUndefined();
    expect(updateRes.data.updateMenuItem.name).toBe("Updated Name");
  });

  it('deletes a menu item', async () => {
    const addRes = await mutate({ mutation: `
      mutation {
        addMenuItem(category: "Appetizer", name: "Delete Test", description: "Delete Desc", price: 5.99) {
          id
        }
      }
    `});
    const id = addRes.data.addMenuItem.id;

    const deleteRes = await mutate({ mutation: `
      mutation {
        deleteMenuItem(id: "${id}") {
          id
        }
      }
    `});
    expect(deleteRes.errors).toBeUndefined();
    expect(deleteRes.data.deleteMenuItem.id).toBe(id);
  });
});
