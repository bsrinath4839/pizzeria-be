const cors = require('cors');
const express = require('express');
const http = require('http');
const { PORT } = require('../config');
const { waterfall } = require('async');
const connect = require('../database/connection');
const PizzaRoutes = require('./pizza.routes');
const IngredientRoutes = require('./ingredient.routes');
const CartRoutes = require('./cart.routes');

const app = express();

const init = (cb) => {
    waterfall([
        (next) => {
            connect((error) => {
                if (error) next(error);
                else {
                    console.log("Database connction established...");
                    next(null);
                }
            })
        },
        (next) => {
            http
                .createServer(app)
                .listen(PORT, (error) => {
                    if (error) next(error);
                    else {
                        console.log(`Server is running on http://localhost:${PORT}/`);
                        next(null);
                    }
                })
        },
        (next) => {
            app.use(express.json());
            app.use(express.urlencoded({
                extended: true
            }));
            app.use(cors());
            app.use('/pizzas', PizzaRoutes);
            app.use('/ingredients', IngredientRoutes);
            app.use('/cart', CartRoutes);
            next(null);
        }
    ], cb)
}

module.exports = init;
