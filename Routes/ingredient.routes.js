const { GetAllIngredients } = require('../middlewares/ingredient.middleware');

const IngredientRoutes = require('express')();

IngredientRoutes.get('/', (request, response) => {
    GetAllIngredients((error, doc) => {
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

module.exports = IngredientRoutes;
