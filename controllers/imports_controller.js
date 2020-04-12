const Imp = require('../models/importCheck');

module.exports = {
    index(req, res, next) {
        Imp.find()
        .then(imports => res.status(200).set({"X-Total-Count" : imports.length}).send(imports))
        .catch(next);
    },
    create(req, res, next) {
        const impProps = req.body;

        Imp.create(impProps)
        .then(imp => res.send(imp))
        .catch(next);
    },
    getOne(req, res, next) {
        const impId = req.params.id;
        Imp.findById({_id: impId})
        .then(imp => res.send(imp))
        .catch(next)
    },
    edit(req, res, next) {
        const impId = req.params.id;
        const impProps = req.body;

        Imp.findByIdAndUpdate({_id: impId}, impProps)
        .then(() => Imp.findById({_id: impId}))
        .then(imp => res.send(imp))
        .catch(next);
    },
    delete(req, res, next) {
        const impId = req.params.id;

        Imp.findByIdAndRemove({_id: impId})
        .then(imp => res.status(204).send(imp))
        .catch(next);
    }
};