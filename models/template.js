const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  department: {
    type: String,
    required: true
  },
  capability: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  },
  cost: String,
  mapImageURL: String,
  downloadURL: {
      type: String,
      required: true
  },
  githubID: String,
  dateUploaded: String,
  authorEmail: {
      type: String,
      required: true
  },
  audience: String,
  visible: {
      type: Boolean,
      default: true
  }, 
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  workflowVersion: {
    type: String,
    required: false,
    default: ''
  }, 
  workflow: {
    type: Boolean,
    default: false,
    required: true
  },
  nwcToken: {
    type: String,
    required: false
  },
  dlCounter: {
    type: Number,
    default: 0
  },
  language: {
    type: String,
    required: true,
    default: 'English'
  },
  extension: {
    type: String,
    required: true
  }, 
  componentWorkflow: {
    type: Boolean,
    default: false
  },
  authorName: {
    type: String,
    default: "Nintex"
  },
  templateContent: {
    type: String
  }
});

const Template = mongoose.model('template', TemplateSchema);

module.exports = Template;