const Mongoose = require("mongoose");
const { DB_URL } = require('../config');

const URL = DB_URL

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

const connect = (cb) => Mongoose.connect(URL, options, (error) => {
    if (error) cb(error)
    else cb(null)
})

module.exports = connect;