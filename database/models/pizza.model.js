const Mongoose  = require("mongoose");

const pizzaSchema = new Mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: "",
        unique: true,
    },
    type: {
        type: String,
        required: true,
        default: "",
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    name: {
        type: String,
        required: true,
        default: "",
        unique: true,
    },
    image: {
        type: String,
        required: true,
        default: "",
        unique: true,
    },
    description: {
        type: String,
        required: true,
        default: "",
    },
    ingredients: {
        type: Array,
        required: true,
        default: [],
    },
    topping: {
        type: Array,
        required: true,
        default: [],
    }
})

const PizzaModel = Mongoose.model('pizza', pizzaSchema);

module.exports = PizzaModel