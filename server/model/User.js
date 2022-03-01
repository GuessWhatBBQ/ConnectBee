const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: String,
    lastName: String,
    creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);
