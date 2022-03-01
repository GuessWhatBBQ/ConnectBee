const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        first: String,
        last: String,
    },
    creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);
