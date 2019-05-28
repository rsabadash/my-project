const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const connection = require('./utils/database');
const authRouter = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client', 'dist'))); // temporary SRC

app.use(authRouter);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

connection.mongoConnect
	.then(() => app.listen(port))
	.catch(error => console.log(error));

