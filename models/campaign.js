const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
campaignName: {
    type: String,
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