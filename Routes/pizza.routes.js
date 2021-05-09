const { GetAllPizzas } = require('../middlewares/pizza.middleware');

const PizzaRoutes = require('express')();

PizzaRoutes.get('/', (request, response) => {
    GetAllPizzas((error, doc) => {
        if (error) {
            response
                .status(400)
                .json({
                    success: false,
                    result: error,
                });
        } else {
            response
                .status(200)
                .json({
                    success: true,
                    result: doc,
                });
        }
    });
});


module.exports = PizzaRoutes;
