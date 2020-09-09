const Convert = require("../models/convert");

module.exports = {
    index(req, res, next) {
        Convert.find()
          .then(converts => res.status(200).set({"X-Total-Count" : converts.length}).send(converts))
          .catch(next);
      },
      create(req, res, next) {
        const convertProps = req.body;
    
        Convert.create(convertProps)
          .then(convert => res.send(convert))
          .catch(next);
      },
      getOne(req, res, next) {
        const convertId = req.params.id;
        Convert.findById({_id: convertId})
        .then(convert => res.send(convert))
        .catch(next);
      },
      edit(req, res, next) {
        // get convert id to update
        const convertId = req.params.id;
        const convertProps = req.body;
    
        Convert.findByIdAndUpdate({ _id: convertId }, convertProps)
          .then(() => Convert.findById({ _id: convertId }))
          .then(convert => res.send(convert))
          .catch(next);
      },
};