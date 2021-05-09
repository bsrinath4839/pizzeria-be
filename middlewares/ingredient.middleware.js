const { waterfall } = require("async");
const { IngredientDBOps } = require("../dbops");

const GetAllIngredients = (cb) => {
    waterfall([
        (next) => {
            IngredientDBOps
                .find({}, {}, (error, doc) => {
                    next(error, doc);
                });
        }
    ], cb);
};

module.exports = {
    GetAllIngredients,
};