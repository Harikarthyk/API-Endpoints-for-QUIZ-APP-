const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 32,
		trim: true,
	},
	email: {
		type: String,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
	},
	googleId: {
		type: String,
	},
});

module.exports = mongoose.model('User', userSchema);
