const TemplatesController = require('../controllers/templates_controller');

module.exports = (app) => {
    app.get('/api/templates', TemplatesController.greeting);
    app.post('/api/templates/create', TemplatesController.create);
    app.put('/api/templates/update/:id', TemplatesController.edit);
}