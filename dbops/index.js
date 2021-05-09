const IngredientDBOps = require('./ingredient.dbops');
const PizzaDBOps = require('./pizza.dbops');
const CartDbOps = require('./cart.dbops');
const ToppingDbOps = require('./topping.dbops');

module.exports={
    CartDbOps,
    IngredientDBOps,
    PizzaDBOps,
    ToppingDbOps,
};