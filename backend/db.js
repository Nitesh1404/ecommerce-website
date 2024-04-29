const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/E-commerce-slashmark";

const connectToMongoDb = () => {
	mongoose.connect(URI);
	if (mongoose.connection) {
		console.log("Database connected successfully!!")
	}
}

module.exports = connectToMongoDb;