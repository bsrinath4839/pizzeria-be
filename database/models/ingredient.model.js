const Mongoose = require("mongoose");

const ingredientSchema = new Mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: "",
        unique: true,
    },
    name: {
        type: String,
        required: true,
        default: "",
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: true,
        default: "",
        unique: true,
    }
})

const IngredientModel = Mongoose.model('ingredient', ingredientSchema);

module.exports = IngredientModel;