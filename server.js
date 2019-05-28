const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');
require('dotenv').config();

const connection = require('./utils/database');
const authRouter = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;
const store = new MongoDBStore({
	uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-3j5fb.gcp.mongodb.net/${process.env.DB_NAME}`,
	collection: 'sessions'
});

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client', 'dist'))); // temporary SRC
app.use(session({
	secret: 'my project',
	resave: false,
	saveUninitialized: false,
	store: store
}));

app.use(authRouter);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

connection.mongoConnect
	.then(() => app.listen(port))
	.catch(error => console.log(error));

