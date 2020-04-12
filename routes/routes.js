const TemplatesController = require('../controllers/templates_controller');
const ImpsController = require('../controllers/imports_controller');

module.exports = (app) => {
    // Template based Routes
    app.get('/api/templates', TemplatesController.index);
    app.get('/api/templates/:id', TemplatesController.getOne);
    app.post('/api/templates/', TemplatesController.create);
    app.put('/api/templates/:id', TemplatesController.edit);
    app.delete('/api/templates/:id', TemplatesController.delete);

    //Template Import based Routes
    app.get('/api/imps', ImpsController.index);
    app.get('/api/imps/:id', ImpsController.getOne);
    app.post('/api/imps/', ImpsController.create);
    app.put('/api/imps/:id', ImpsController.edit);
    app.delete('/api/imps/:id', ImpsController.delete);
}