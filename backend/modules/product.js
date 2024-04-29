const mongoose = require('mongoose');
const { Schema } = mongoose;

// creating schema for add product 

const ProductSchema = new Schema({
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	new_price: {
		type: Number,
		required: true,
	},
	old_price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now()
	},
	available: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model("products", ProductSchema);