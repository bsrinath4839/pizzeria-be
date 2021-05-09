const { PizzaModel } = require('../database/models');

const find = (filter, options, cb) => {
    PizzaModel.find(filter, options, (error, doc) => {
        cb(error, doc);
    });
};

const save = (_doc, cb) => {
    const new_doc = new PizzaModel(_doc);
    new_doc.save(_doc, (error) => {
        if (error) cb(error);
        else cb(null);
    });
};


module.exports = {
    find,
    save,
};