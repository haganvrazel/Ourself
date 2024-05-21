const { gql } = require('apollo-server');

const typeDefs = gql`
  type MenuItem {
    id: ID!
    category: String!
    name: String!
    description: String
    price: Float!
  }

  type Query {
    menuItems: [MenuItem]
  }

  type Mutation {
    addMenuItem(category: String!, name: String!, description: String, price: Float!): MenuItem
    deleteMenuItem(id: ID!): MenuItem
    updateMenuItem(id: ID!, category: String, name: String, description: String, price: Float): MenuItem
  }
`;

module.exports = typeDefs;
