const { ToppingsModel } = require('../database/models');

const save = (_doc, cb) => {
    let doc = new ToppingsModel(_doc);
    doc.save(_doc, error => {
        if (error) cb(error);
        else cb(null);
    });
};

const find = (filter, options, cb) => {
    ToppingsModel.find(filter, options, (error, _doc) => {
        cb(error, _doc);
    });
};
const findOne = (filter, options, cb) => {
    ToppingsModel.findOne(filter, options, (error, _doc) => {
        cb(error, _doc);
    });
};

const findOneAndRemove = (filter, options, cb) => {
    ToppingsModel.findOneAndRemove(filter, options, (error) => {
        if (error) cb(error);
        else cb(null);
    });
};

const findOneAndUpdate = (filter, update, options, cb) => {
    ToppingsModel.findOneAndUpdate(filter, update, options, (error, _doc) => {
        cb(error, _doc);
    });
};

module.exports = {
    find,
    findOne,
    findOneAndRemove,
    findOneAndUpdate,
    save,
}