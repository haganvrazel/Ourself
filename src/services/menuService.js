// Menu items from provided example
let menuItems = [
    // Appetizers
    { id: "1", category: "Appetizer", name: "Iceberg Wedge Salad with House Cured Bacon", description: "tomato salsa gorgonzola", price: 7.50 },
    { id: "2", category: "Appetizer", name: "Sautéed Shredded Brussels Sprouts", description: "bacon hazelnuts gorgonzola", price: 6.95 },
    { id: "3", category: "Appetizer", name: "Kale Salad", description: "parmesan crisp corn radish garlic-lemon vinaigrette", price: 7.50 },
    { id: "4", category: "Appetizer", name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto", description: "grilled tomato salsa crostini", price: 6.95 },
    { id: "5", category: "Appetizer", name: "Chicken and Cabbage Eggrolls", description: "hot & sour dipping sauce", price: 6.95 },
  
    // Entrees
    { id: "6", category: "Entree", name: "Farfalle Pasta with Braised Pork in Tomato Cream", description: "capers butternut squash kale", price: 12.95 },
    { id: "7", category: "Entree", name: "Stout Braised Bratwurst", description: "horseradish mashed potatoes roasted root veggies grilled onion", price: 13.95 },
    { id: "8", category: "Entree", name: "Salmon & Crispy Tofu in Yellow Curry Sauce", description: "vegetable sauté golden raisin chutney", price: 15.95 },
    { id: "9", category: "Entree", name: "Sesame Shrimp", description: "udon noodles ramen broth shiitake mushrooms bean sprouts scallions", price: 13.95 },
  
    // Sandwiches - Cold
    { id: "10", category: "Sandwich", name: "Turkey & Avocado", description: "with tomato", price: 9.25 },
    { id: "11", category: "Sandwich", name: "Pub Club", description: "turkey, bacon, lettuce, tomato", price: 9.25 },
    { id: "12", category: "Sandwich", name: "Rare Roast Beef & Swiss", description: "sweet-hot mustard, lettuce, red onion", price: 9.25 },
    { id: "13", category: "Sandwich", name: "Veggie", description: "pepper jack, avocado, sprout, tomato", price: 9.25 },
  
    // Sandwiches - Hot
    { id: "14", category: "Sandwich", name: "Southwest Chicken Breast", description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese", price: 9.50 },
    { id: "15", category: "Sandwich", name: "Portobello Fresh Mozzarella", description: "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli", price: 9.50 },
    { id: "16", category: "Sandwich", name: "Chipotle BBQ Pork Sandwich", description: "with Pickled Jalapeño Slaw", price: 9.50 },
    { id: "17", category: "Sandwich", name: "Bacon Burger", description: "Swiss, Lettuce, Tomato", price: 9.25 },
    { id: "18", category: "Sandwich", name: "Mexi Burger", description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole", price: 9.25 },
    { id: "19", category: "Sandwich", name: "Herb Marinated Top Sirloin", description: "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Focaccia", price: 10.95 },
    { id: "20", category: "Sandwich", name: "Roast Beef with Ancho Au Jus", description: "Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette", price: 9.75 },
    { id: "21", category: "Sandwich", name: "Blackened Catfish", description: "Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough", price: 9.75 },
  
    // Soup & Salad Combos
    { id: "22", category: "Soup & Salad Combo", name: "French Onion or Soup of the Day", description: null, price: 4.95 },
    { id: "23", category: "Soup & Salad Combo", name: "French Onion or Soup of the Day Combo with small green salad, fresh fruit or house pasta", description: null, price: 7.25 },
    { id: "24", category: "Soup & Salad Combo", name: "French Onion or Soup of the Day Combo with half pasta of the day", description: null, price: 8.75 },
  
    // Fajitas
    { id: "25", category: "Fajitas", name: "Chicken", description: "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas", price: 10.95 },
    { id: "26", category: "Fajitas", name: "Sirloin Steak", description: "Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas", price: 10.95 },
  
    // Tacos
    { id: "27", category: "Tacos", name: "Beer Battered Fish", description: "with Jalapeño Remoulade, Roasted Salsa, Cabbage", price: 9.95 },
    { id: "28", category: "Tacos", name: "Carne Asada", description: "with Guacamole, Tomatillo Salsa", price: 9.95 },
    { id: "29", category: "Tacos", name: "Citrus Marinated Chicken", description: "with Guacamole, Tomatillo Salsa", price: 9.95 },
    { id: "30", category: "Tacos", name: "Grilled Veggie", description: "with Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa", price: 9.95 },
  
    // Enchiladas
    { id: "31", category: "Enchiladas", name: "Beef", description: "with Southwestern Succotash, Black Beans with Chipotle Crema", price: 8.50 },
    { id: "32", category: "Enchiladas", name: "Chicken", description: "with Southwestern Succotash, Black Beans with Chipotle Crema", price: 9.95 },
    { id: "33", category: "Enchiladas", name: "Cheese", description: "with Southwestern Succotash, Black Beans with Chipotle Crema", price: 11.50 },
    { id: "34", category: "Enchiladas", name: "Veggie", description: "with Southwestern Succotash, Black Beans with Chipotle Crema", price: 9.95 },
    { id: "35", category: "Enchiladas", name: "Chili Relleno", description: "Stuffed with Jack Cheese & Corn, Glazed Yam, Chayote Squash Succotash, Red Chili Sauce", price: 9.95 },
    { id: "36", category: "Enchiladas", name: "Pepita Crusted Salmon", description: "with Chipotle Glaze – chevre whipped yams, jicama slaw, tomatillo sauce", price: 10.95 },
  
    // Quiche
    { id: "37", category: "Quiche", name: "Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche", description: "Choice of Fresh Fruit or Green Salad", price: 8.95 },
  
    // Green Salads
    { id: "38", category: "Green Salad", name: "Grilled Red Trout", description: "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette", price: 10.95 },
    { id: "39", category: "Green Salad", name: "Smoked Turkey", description: "Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado", price: 9.95 },
    { id: "40", category: "Green Salad", name: "Asian Grilled Chicken", description: "Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing", price: 10.50 },
    { id: "41", category: "Green Salad", name: "Southwest Grilled Chicken", description: "Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette", price: 10.50 },
    { id: "42", category: "Green Salad", name: "Mediterranean Italian Sausage", description: "Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette", price: 9.95 },
    { id: "43", category: "Green Salad", name: "Grilled Salmon", description: "Artichoke tapenade, shredded kale, corn, radish, parmesan crisps", price: 11.50 }
  ];
  
  const getAllMenuItems = () => menuItems;
  
  const addMenuItem = (menuItem) => {
    menuItems.push(menuItem);
    return menuItem;
  };
  
  const deleteMenuItem = (id) => {
    const index = menuItems.findIndex(item => item.id === id);
    if (index !== -1) {
      return menuItems.splice(index, 1)[0];
    }
    return null;
  };
  
  const updateMenuItem = (id, updatedFields) => {
    const menuItem = menuItems.find(item => item.id === id);
    if (menuItem) {
      Object.assign(menuItem, updatedFields);
      return menuItem;
    }
    return null;
  };
  
  module.exports = {
    getAllMenuItems,
    addMenuItem,
    deleteMenuItem,
    updateMenuItem,
  };
    