const TemplatesController = require('../controllers/templates_controller');

module.exports = (app) => {
    app.get('/api/templates', TemplatesController.index);
    app.get('/api/templates/:id', TemplatesController.getOne);
    app.post('/api/templates/', TemplatesController.create);
    app.put('/api/templates/:id', TemplatesController.edit);
    app.delete('/api/templates/:id', TemplatesController.delete);
}