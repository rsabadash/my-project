const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		require: true,
		trim: true
	},
	email: {
		type: String,
		require: true,
		trim: true
	},
	password: {
		type: String,
		require: true,
		trim: true
	}
}, { timestamp: true });

const User = mongoose.model('User', userSchema);

module.exports = User;