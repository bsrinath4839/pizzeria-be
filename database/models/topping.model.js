const Mongoose = require('mongoose');

const toppingsSchema = new Mongoose.Schema({
    toppings: {
        type: Array,
        required: true,
        default: [],
    },
    user_mobile: {
        type: String,
        required: true,
        default: "",
        unique: true
    },
    sum: {
        type: Number,
        required: true,
        default: 0
    },
    at: {
        type: Date,
        require: true,
        default: Date.now()
    }
});

const ToppingsModel = Mongoose.model('topping', toppingsSchema);

module.exports = ToppingsModel;
