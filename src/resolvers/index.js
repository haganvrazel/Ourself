const { v4: uuidv4 } = require('uuid');
const menuService = require('../services/menuService');

const resolvers = {
  Query: {
    menuItems: () => menuService.getAllMenuItems(),
  },
  Mutation: {
    addMenuItem: (_, { category, name, description, price }) => {
      const newItem = {
        id: uuidv4(),
        category,
        name,
        description,
        price,
      };
      return menuService.addMenuItem(newItem);
    },
    deleteMenuItem: (_, { id }) => menuService.deleteMenuItem(id),
    updateMenuItem: (_, { id, category, name, description, price }) => 
      menuService.updateMenuItem(id, { category, name, description, price }),
  },
};

module.exports = resolvers;
