import { waterfall } from "async"
import { ToppingDbOps } from "../dbops";

const AddTopping = (_doc, cb) => {
    waterfall([
        (next) => {
            ToppingDbOps
                .save(_doc, (error) => {
                    if (error) next(error, { message: "Not Added!" });
                    else next(null, { message: "Added!" });
                })
        },
    ], cb);
};

const AddOneMoreToToppings = (filter, update, cb) => {
    waterfall([
        (next) => {
            let options = { new: true };
            next(null, options);
        },
        (next) => {
            ToppingDbOps
                .findOneAndUpdate(filter, update, options, (error, doc) => {
                    next(error, doc);
                });
        },
    ], cb);
};

const GetToppings = (filter, cb) => {
    waterfall([
        (next) => {
            ToppingDbOps.find(filter, {}, (error, doc) => {
                next(error, doc);
            })
        },
    ], cb);
};

const RemoveToppings = (filter, cb) => {
    waterfall([
        (next) => {
            ToppingDbOps.findOneAndRemove(filter, {}, (error) => {
                if (error) next(error);
                else next(null);
            });
        },
    ], cb);
};

module.exports = {
    AddTopping,
    AddOneMoreToToppings,
    GetToppings,
    RemoveToppings,
};