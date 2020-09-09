const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConvertSchema = new Schema({
    convertNumber: {
        type: Number,
        required: true
    }
});

const Convert = mongoose.model('convert',  ConvertSchema);
module.exports = Convert;