const express = require('express');
const app = express();
const port = 5000;
const connectToMongoDb = require('./db');
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// database connection 
connectToMongoDb();

app.use(express.json());


app.use('/auth', require('./routes/auth'))
app.use('/product', require('./routes/product'));

app.listen(port, () => {
	console.log("The server is running on port 5000");
})
