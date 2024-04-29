const express = require('express');
const path = require('path');
const multer = require('multer');
const Product = require('../modules/product');
const User = require('../modules/user');
const fetchuser = require('../middleware/fetchuser')

const router = express.Router();
const port = 5000;

// Creating storage engine for storing images!!
const storage = multer.diskStorage({
	destination: "./uploads/images",
	filename: (req, file, cb) => {
		return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
	}
})

const upload = multer({ storage: storage })


// middleware to access the image url
router.use('/images', express.static('uploads/images'));

// Route 1 : creating uploading end points using POST request !!
router.post('/upload', upload.single('product'), async (req, res) => {
	try {
		if (!req.file) {
			return res.status(400).json({ success: 0, message: "No file uploaded" });
		}
		res.json({
			success: 1,
			image_url: `http://localhost:${port}/product/images/${req.file.filename}`
		});
	} catch (err) {
		console.log("Error occured");
	}
});


// Route 2 : for adding the product in the database end-point "/addproduct"
router.post('/addproduct', async (req, res) => {
	let products = await Product.find({});
	let id;
	if (products.length > 0) {
		let lastProductArray = products.slice(-1);
		let lastProduct = lastProductArray[0]
		id = lastProduct.id + 1;
	}
	else {
		id = 1;
	}
	try {
		const product = new Product({
			id: id,
			name: req.body.name,
			image: req.body.image,
			category: req.body.category,
			new_price: req.body.new_price,
			old_price: req.body.old_price,
		});
		// save the product to databse 
		const saveProduct = await product.save();
		res.json({ success: 1, saveProduct });
	}
	catch (err) {
		console.log("unable to add the product", err);
		res.status(500).send("Internal server error");
	};
});


// Route 3 : for deleting the product end-points "deleteproduct" 
router.delete('/deleteproduct', async (req, res) => {
	try {
		let removedProduct = await Product.findOneAndDelete({ id: req.body.id });
		res.json(removedProduct);
	}
	catch (err) {
		console.log("cannot be removed!");
		res.status(500).send("Internal server error");
	}
});


// Route 4 : for get all products end-points "allproducts"
router.get('/allproduct', async (req, res) => {
	try {
		let products = await Product.find({});
		res.json(products);
	}
	catch (err) {
		console.log("All products");
		res.status(500).send("Internal server error");
	}
});

// Route 5 endpoints for new collections
router.get('/newcollection', async (req, res) => {
	let product = await Product.find({});
	let newcollection = product.slice(1).slice(-8);
	res.send({ newcollection });
});

// Router 6 endpoints for popular in women
router.get('/popularwomen', async (req, res) => {
	let products = await Product.find({ category: "women" });
	let women = products.slice(0, 4);
	res.send(women);
});

// ROute 7 endpoints for ADD to CART
router.post('/addcart', fetchuser, async (req, res) => {
	try {
		let userData = await User.findOne({ _id: req.user.id });
		userData.cartData[req.body.itemId] += 1;
		await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
		res.json("added Successfully!");
	}
	catch (err) {
		console.log("error occured", err);
		res.json("Internal server");
	}
});

// ROute 8 endpoints for REMOVE to CART
router.post('/removecart', fetchuser, async (req, res) => {
	try {
		let userData = await User.findOne({ _id: req.user.id });
		if (userData.cartData[req.body.itemId] > 0) {
			userData.cartData[req.body.itemId] -= 1;
		}
		await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
		res.json("removed Successfully!");
	}
	catch (err) {
		console.log("error occured", err);
		res.json("Internal server");
	}
});

// Route 8 endpoints for getcart
router.post('/getcart', fetchuser, async (req, res) => {
	try {
		let userData = await User.findOne({ _id: req.user.id });
		res.json(userData.cartData);
	}
	catch (err) {
		console.log("err", err);
	}
})

module.exports = router;