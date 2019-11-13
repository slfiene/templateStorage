const Template = require("../models/template");
const fs = require("fs");

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
  },
  makeTemplate(req, res, next) {
      // add abilty to do base64 Encoding
    const fileName = req.params.fileURL;
    console.log(fileName);
    return fileName;

    // fs.readFile(fileName, (err, data) => {
    //   if (err) throw err;
    //   let encodedData = data.toString("base64");
    //   return encodedData;
    // })
    //   .then(data => res.status(200).send(data))
    //   .catch(next);
  }
};
