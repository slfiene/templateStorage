const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/templateStorage', {useNewUrlParser: true, useUnifiedTopology: true});
}


app.use(bodyParser.json());
app.use(cors());
routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

module.exports = app;