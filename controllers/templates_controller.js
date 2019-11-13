const Template = require("../models/template");

module.exports = {
  index(req, res, next) {
    Template.find()
      .then(templates => res.status(200).send(templates))
      .catch(next);
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

    Template.findByIdAndUpdate({ _id: templateId }, templateProps)
      .then(() => Template.findById({ _id: templateId }))
      .then(template => res.send(template))
      .catch(next);
  },
  delete(req, res, next) {
    const templateId = req.params.id;

    Template.findByIdAndRemove({ _id: templateId })
      .then(template => res.status(204).send(template))
      .catch(next);
  }

};
