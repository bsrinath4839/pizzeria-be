const Mongoose = require("mongoose");

const cartSchema = new Mongoose.Schema({
    item: {
        _id: {
            type: String,
            required:true,
            default:"",
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        name: {
            type: String,
            default: "User Made",
        },
        type: {
            type: String,
            required: true,
            default: "customized",
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
        ingredients: {
            type: Array,
            required: true,
            default: [],
        },
        toppings: {
            type: Array,
            required: true,
            default: [],
        }
    },
    amount: {
        type: Number,
        required: true,
        default:0,
    },
    user_mobile: {
        type: String,
        default: "",
        required: true,
    }
});

const CartModel = Mongoose.model('cart', cartSchema);

module.exports = CartModel;
