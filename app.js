const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const index = require('./routes/index');
const search = require('./routes/search');
const result = require('./routes/result');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/search', search);
app.use('/results', result);

app.listen(8000, () => {
    console.log('App listening on port 8000...')
})

module.exports = app;