const Template = require('../models/template');

module.exports = {
    greeting(req, res) {
        res.send({hi: 'there'});
    },
    create(req, res, next) {
        const templateProps = req.body;

        Template.create(templateProps)
            .then(template => res.send(template))
            .catch(next);

    },
    edit(req, res, next) {
        // get template id to update
        const templateId = req.params.id;
        const templateProps = req.body;

        Template.findByIdAndUpdate({_id: templateId}, templateProps)
        .then(() => Template.findById({_id: templateId}))
        .then(template => res.send(template))
        .catch(next);
    }
};