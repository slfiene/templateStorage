const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImportSchema = new Schema({
    tenantName: {
        type: String,
        required: true
    },
    templateId: {
        type: String,
        required: true
    },
    importDate: {
        type: String,
        required: false
    },
    templateName: {
        type: String,
        required: false
    },
    template_dBiD: {
        type: String,
        required: false
    },
    uploadDate: {
        type: String,
        required: false
    }
});

const ImportCheck = mongoose.model('importCheck', ImportSchema);

module.exports = ImportCheck;