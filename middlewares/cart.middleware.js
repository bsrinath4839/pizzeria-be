/**
 * Need to write Middlewares
 * Get Cart Items using Mobile Number
 * Add Cart Items to mobile number
 *  */

const { waterfall } = require("async");
const { CartDbOps } = require('../dbops');

const AddCartItems = (_doc, cb) => {
    waterfall([
        (next) => {
            let amount = _doc?.item?.price;
            next(null, amount);
        },
        (amount, next) => {

            let doc = { ..._doc, amount: amount };
            CartDbOps.save(doc, (error) => {
                if (error) next(error);
                else next(null);
            })
        }
    ], cb);
}

const GetCartItems = (filter, cb) => {
    waterfall([
        (next) => {
            CartDbOps.find(filter, {}, (error, doc) => {
                if (error) next(error, [])
                else next(null, doc);
            })
        },
        (doc, next) => {
            let user_mobile = filter.user_mobile;
            let total = 0;
            doc.map(i => {
                total += i.amount;
            })
            let items = [];
            doc.map(i => {
                items.push(i.item)
            })

            let result = { items, user_mobile, amount: total };
            next(null, result);
        }
    ], cb);
}

const RemoveCartItem = (filter, cb) => {
    waterfall([
        (next) => {
            CartDbOps.findOneAndRemove(filter, {}, (error) => {
                if (error) next(error, { message: "Item is not removed. Try again" });
                else next(null, { message: "Item is removed Successfully" });
            })
        }
    ], cb);
};

module.exports = {
    AddCartItems,
    GetCartItems,
    RemoveCartItem,
}