const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URI;

const options = {
	user: process.env.DB_USER,
	pass: process.env.DB_PASS,
	dbName: process.env.DB_NAME,
	useNewUrlParser: true,
	useCreateIndex: true,
	autoIndex: false
};

const connection = mongoose.connect(uri, options);

exports.mongoConnect = connection;