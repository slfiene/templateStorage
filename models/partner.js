const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartnerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specialties: {
        type: Array,
        default: [],
        required: true
    },
    templates: {
        type: Array,
        default: [],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    largeIcon: {
        type: String,
        required: false
    },
    smallIcon: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    }
});

const Partner = mongoose.model('partner', PartnerSchema, 'partners');

module.exports = Partner;