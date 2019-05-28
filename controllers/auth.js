const User = require('../models/user.model');

exports.register = (req, res) => {
	const {
		name,
		email,
		password
	} = req.body;

	const newUser = new User({ name, email, password });

	newUser.save()
		.then(() => res.json('User added'))
		.catch(error => res.status(400).json(`Error: ${error}`));
};

exports.logIn = (req, res) => {
	const {
		email,
		password
	} = req.body;

	res.json('Test', email, password);
};