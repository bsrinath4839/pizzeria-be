const { waterfall } = require("async")
const { PizzaDBOps } = require("../dbops")

const GetAllPizzas = (cb) => {
    waterfall([
        (next) => {
            PizzaDBOps.find({}, {}, (error, doc) => {
                next(error, doc);
            });
        }
    ], cb);
};

module.exports = {
    GetAllPizzas,
};