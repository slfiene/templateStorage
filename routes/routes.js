const TemplatesController = require('../controllers/templates_controller');

module.exports = (app) => {
    app.get('/api/templates', TemplatesController.index);
    app.post('/api/templates/create', TemplatesController.create);
    app.put('/api/templates/update/:id', TemplatesController.edit);
    app.delete('/api/templates/:id', TemplatesController.delete);
    app.post('/api/encode', TemplatesController.makeTemplate);
}