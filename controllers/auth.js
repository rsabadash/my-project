const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

exports.register = (req, res) => {
	const {
		name,
		email,
		password,
		confirmPassword
	} = req.body;

	User.findOne({ email })
		.then(user => {
			if (user) return res.redirect('/login'); // note: change behaviour if user exists.

			return bcrypt.hash(password, 12)
				.then(hashedPassword => {
					const newUser = new User({
						name,
						email,
						password: hashedPassword
					});

					return newUser.save();
				})
				.then(() => res.json('User added'))
		})
		.catch(error => res.status(400).json(`Error: ${error}`));
};

exports.logIn = (req, res) => {
	const {
		email,
		password
	} = req.body;

	User.findOne({ email })
		.then(user => {
			if (!user) return res.redirect('/login'); // note: change behaviour if user doesn't exist.

			bcrypt.compare(password, user.password)
				.then(match => {
					if (!match) return res.redirect('/login'); // note: change behaviour if user enter invalid password.

					req.session.isLoggedIn = true;
					req.session.save(() => {
						res.json('User logged in');
					})
				});
		})
		.catch(error => res.status(400).json(`Error: ${error}`));
};

exports.logOut = (req, res) => {
	req.session.destroy(error => {
		if (error) console.log(error);

		res.redirect('/login')
	});
};