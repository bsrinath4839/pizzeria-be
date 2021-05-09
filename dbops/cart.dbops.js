const { CartModel } = require('../database/models');

const find = (filter, options, cb) => {
    CartModel.find(filter, options, (error, doc) => {
        cb(error, doc)
    })
}

const save = (_doc, cb) => {
    let doc = new CartModel(_doc);
    doc.save(_doc, error => {
        if (error) cb(error);
        else cb(null);
    });
};

const findOneAndRemove = (filter, options, cb) => {
    CartModel.findOneAndRemove(filter, options, (error) => {
        if (error) cb(error);
        else cb(null);
    });
};
module.exports = {
    find,
    findOneAndRemove,
    save,
};