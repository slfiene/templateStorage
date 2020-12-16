const Template = require("../models/template");

module.exports = {
  index(req, res, next) {
    Template.find()
      .then(templates => res.status(200).set({"X-Total-Count" : templates.length}).send(templates))
      .catch(next);
  },
  create(req, res, next) {
    const templateProps = req.body;

    Template.create(templateProps)
      .then(template => res.send(template))
      .catch(next);
  },
  getOne(req, res, next) {
    const templateId = req.params.id;
    Template.findById({_id: templateId})
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
  },
  getAllOfType(req, res, next){
    //get templates related to capability
    const templateCapability = req.params.capability;
    Template.find({capability: templateCapability})
    .then(templates => res.status(200).set({"X-Total-Count": templates.length}).send(templates))
    .catch(next);
  },
  getWorkflowVersions(req, res, next){
    //get only NWC templates
    const wfVersion = req.params.workflowVersion;
    Template.find({workflowVersion: wfVersion})
    .then(templates => res.status(200).set({"X-Total-Count": templates.length}).send(templates))
    .catch(next);
  }

};
