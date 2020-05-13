const Campaign = require("../models/campaign");

module.exports = {
  index(req, res, next) {
    Campaign.find()
      .then(campaigns => res.status(200).set({"X-Total-Count" : campaigns.length}).send(campaigns))
      .catch(next);
  },
  create(req, res, next) {
    const campaignProps = req.body;

    Campaign.create(campaignProps)
      .then(campaign => res.send(campaign))
      .catch(next);
  },
  getOne(req, res, next) {
    const campaignId = req.params.id;
    Campaign.findById({_id: campaignId})
    .then(campaign => res.send(campaign))
    .catch(next);
  },
  edit(req, res, next) {
    // get campaign id to update
    const campaignId = req.params.id;
    const campaignProps = req.body;

    Campaign.findByIdAndUpdate({ _id: campaignId }, campaignProps)
      .then(() => Campaign.findById({ _id: campaignId }))
      .then(campaign => res.send(campaign))
      .catch(next);
  },
  delete(req, res, next) {
    const campaignId = req.params.id;

    Campaign.findByIdAndRemove({ _id: campaignId })
      .then(campaign => res.status(204).send(campaign))
      .catch(next);
  }

};