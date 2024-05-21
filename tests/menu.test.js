const { ApolloServer } = require('apollo-server');
const typeDefs = require('../src/schemas/typeDefs');
const resolvers = require('../src/resolvers');
const { createTestClient } = require('apollo-server-testing');
const { v4: uuidv4 } = require('uuid');

// Mock UUID creation
jest.mock('uuid', () => {
  const originalModule = jest.requireActual('uuid');
  return {
    ...originalModule,
    v4: jest.fn(() => 'mocked-uuid')
  };
});

const server = new ApolloServer({ typeDefs, resolvers });
const { query, mutate } = createTestClient(server);

describe('GraphQL API', () => {
  it('fetches menu items', async () => {
    const GET_MENU_ITEMS = `
      query {
        menuItems {
          id
          category
          name
          description
          price
        }
      }
    `;
    const res = await query({ query: GET_MENU_ITEMS });
    expect(res.errors).toBeUndefined();
    expect(res.data.menuItems).toBeInstanceOf(Array);
  });

  it('adds a menu item', async () => {
    const ADD_MENU_ITEM = `
      mutation {
        addMenuItem(category: "Appetizer", name: "Test Item", description: "Test Desc", price: 9.99) {
          id
          category
          name
          description
          price
        }
      }
    `;
    const res = await mutate({ mutation: ADD_MENU_ITEM });
    expect(res.errors).toBeUndefined();
    expect(res.data.addMenuItem.id).toBe('mocked-uuid');
    expect(res.data.addMenuItem.name).toBe("Test Item");
  });

  it('updates a menu item', async () => {
    const ADD_MENU_ITEM = `
      mutation {
        addMenuItem(category: "Appetizer", name: "Update Test", description: "Update Desc", price: 5.99) {
          id
        }
      }
    `;
    await mutate({ mutation: ADD_MENU_ITEM });

    const UPDATE_MENU_ITEM = `
      mutation {
        updateMenuItem(id: "mocked-uuid", name: "Updated Name") {
          id
          name
        }
      }
    `;
    const res = await mutate({ mutation: UPDATE_MENU_ITEM });
    expect(res.errors).toBeUndefined();
    expect(res.data.updateMenuItem.id).toBe('mocked-uuid');
    expect(res.data.updateMenuItem.name).toBe("Updated Name");
  });

  it('deletes a menu item', async () => {
    const ADD_MENU_ITEM = `
      mutation {
        addMenuItem(category: "Appetizer", name: "Delete Test", description: "Delete Desc", price: 5.99) {
          id
        }
      }
    `;
    await mutate({ mutation: ADD_MENU_ITEM });

    const DELETE_MENU_ITEM = `
      mutation {
        deleteMenuItem(id: "mocked-uuid") {
          id
        }
      }
    `;
    const res = await mutate({ mutation: DELETE_MENU_ITEM });
    expect(res.errors).toBeUndefined();
    expect(res.data.deleteMenuItem.id).toBe('mocked-uuid');
  });
});
