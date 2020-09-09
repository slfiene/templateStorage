const Convert = require("../models/convert");

module.exports = {
    index(req, res, next) {
        Convert.find()
          .then(campaigns => res.status(200).set({"X-Total-Count" : campaigns.length}).send(campaigns))
          .catch(next);
      },
      create(req, res, next) {
        const campaignProps = req.body;
    
        Convert.create(campaignProps)
          .then(campaign => res.send(campaign))
          .catch(next);
      },
      getOne(req, res, next) {
        const campaignId = req.params.id;
        Convert.findById({_id: campaignId})
        .then(campaign => res.send(campaign))
        .catch(next);
      },
      edit(req, res, next) {
        // get campaign id to update
        const campaignId = req.params.id;
        const campaignProps = req.body;
    
        Convert.findByIdAndUpdate({ _id: campaignId }, campaignProps)
          .then(() => Convert.findById({ _id: campaignId }))
          .then(campaign => res.send(campaign))
          .catch(next);
      },
};