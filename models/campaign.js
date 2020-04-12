const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
campaignName: {
    type: String,
    required: true
},
campaignStart: {
    type: Date,
    required: true
}, 
campaignEnd: {
    type: Date,
    required: true
},
templates: {
    type: Array,
    default: [],
    required: true
},
campaignDescription: {
    type: String
},
sfCampaignCode: {
    type: String,
    required: false
},
sfCodeExists: {
    type: Boolean,
    required: true
}
});

const Campaign = mongoose.model('campaign', CampaignSchema);
module.exports = Campaign;