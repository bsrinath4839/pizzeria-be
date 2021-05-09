const { GetCartItems, AddCartItems, RemoveCartItem } = require('../middlewares/cart.middleware');

const CartRoutes = require('express')();

/**
 * create routes for sending cart items based on mobile
 * 
 * create routes for adding data based on mobile
 */

CartRoutes.post('/add', (request, response) => {
    let {
        item,
        user_mobile,
    } = request.body;
    AddCartItems({ item, user_mobile }, (error) => {
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
                    result: {
                        message: "Items Added to cart successfully"
                    },
                });
        }
    })
})


CartRoutes.get('/get/:user_mobile', (request, response) => {
    let { user_mobile } = request.params;
    GetCartItems({ user_mobile }, (error, doc) => {
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
    })
})

CartRoutes.delete('/remove/:user_mobile/:_id', (request, response) => {
    let { _id, user_mobile } = request.params;
    RemoveCartItem({ user_mobile, "item._id": _id }, (error, result) => {
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
                    result,
                });
        }
    })
})

module.exports = CartRoutes;