const TemplatesController = require('../controllers/templates_controller');
const ImpsController = require('../controllers/imports_controller');
const CampController = require('../controllers/campaign_controller');
const ConvertController = require('../controllers/convert_controller');
const PartnerController = require('../controllers/partner_controller');
const Convert = require('../models/convert');

module.exports = (app) => {
    // Template based Routes
    app.get('/api/templates', TemplatesController.index);
    app.get('/api/templates/:id', TemplatesController.getOne);
    app.get('/api/:capability/', TemplatesController.getAllOfType);
    app.get('/api/:capability/:workflowVersion', TemplatesController.getWorkflowVersions);
    app.post('/api/templates/', TemplatesController.create);
    app.put('/api/templates/:id', TemplatesController.edit);
    app.delete('/api/templates/:id', TemplatesController.delete);

    //Template Import based Routes
    app.get('/api/imports/all', ImpsController.index);
    app.get('/api/imps/:id', ImpsController.getOne);
    app.post('/api/imps/', ImpsController.create);
    app.put('/api/imps/:id', ImpsController.edit);
    app.delete('/api/imps/:id', ImpsController.delete);

    //Campaign based Routes
    app.get('/api/camp', CampController.index);
    app.get('/api/camp/:id', CampController.getOne);
    app.post('/api/camp/', CampController.create);
    app.put('/api/camp/:id', CampController.edit);
    app.delete('/api/camp/:id', CampController.delete);

    //Converter based Routes
    app.get('/api/convert', ConvertController.index);
    app.get('/api/convert/:id', ConvertController.getOne);
    app.post('/api/convert', ConvertController.create);
    app.put('/api/convert/:id', ConvertController.edit);

    //Partner based Routes
    app.get('/v1/api/partners', PartnerController.index);
    app.get('/v1/api/partners/:id', PartnerController.getOne);
    app.post('/api/partners/', PartnerController.create);
    app.put('/api/partners/:id', PartnerController.edit);
    app.delete('/api/partners/:id', PartnerController.delete);
}