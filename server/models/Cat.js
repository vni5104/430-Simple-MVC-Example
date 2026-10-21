const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    bedsOwned: {
        type: Number,
        minimum: 0,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
});

const CatModel = mongoose.model('Cat', CatSchema);

module.exports = CatModel;