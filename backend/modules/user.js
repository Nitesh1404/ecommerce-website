const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema for creating user 
const UserSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true
	},
	password: {
		type: String,
	},
	cartData: {
		type: Object
	},
	date: {
		type: String,
		default: Date.now
	}
});

module.exports = mongoose.model('users', UserSchema);