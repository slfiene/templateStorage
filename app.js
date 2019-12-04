const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://templatestorage:0lgqY4f45zJbXHSryKjO1ehO2tlp7u5Ceq2zhAxCAcq5lmhkXgj8LopcsJmi7OoUC1U3WzByrkefrpc2ARKpCg==@templatestorage.mongo.cosmos.azure.com:10255/?ssl=true&appName=@templatestorage@', {useNewUrlParser: true, useUnifiedTopology: true});
}


app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
       res.sendStatus(200);
     }
     else {
       next();
     }});
     
routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

module.exports = app;