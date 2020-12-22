const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
    mongoose.connect(process.env.TEMPLATE_MONGDB, {useNewUrlParser: true, useUnifiedTopology: true});
}


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({
    exposedHeaders: ['X-Total-Count'],
    origin: "*"
}));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//      });

routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

module.exports = app;

//process.env.TEMPLATE_MONGDB