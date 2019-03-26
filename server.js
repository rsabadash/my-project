const express = require('express');

const bodyParser = require('body-parser');

const testRouter = require('./routes/test');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(testRouter);

app.listen(5000);