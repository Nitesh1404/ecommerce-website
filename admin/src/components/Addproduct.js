import React, { useContext, useState } from 'react'
import upload_area from "../assets/upload_area.svg"

const Addproduct = () => {
	const [image, setImage] = useState(false);
	const [productDetails, setProductDetails] = useState({
		name: "",
		new_price: "",
		old_price: "",
		image: "",
		category: "women"
	})

	const handleImage = (e) => {
		setImage(e.target.files[0]);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	const handleProductChange = (e) => {
		setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
	}

	// AddProduct enpoints 
	const addProduct = async (product) => {
		// once the image url is accessed add the product to db using addproduct endpoints
		let addProductRes = await fetch('http://localhost:5000/product/addproduct', {
			method: "POST",
			headers: {
				Accept: "application/json",
				'Content-Type': "application/json",
			},
			body: JSON.stringify(product),
		});

		let addProductData = await addProductRes.json();
		addProductData.success ? alert("Product added successfully!!") : alert("fail to add the product..");
	}

	//upload product to storage engine
	const uploadProduct = async () => {
		let product = productDetails;

		let formData = new FormData();
		formData.append('product', image);
		// first upload the poduct to product storegae engine to access the url of the product
		let uploadResponse = await fetch('http://localhost:5000/product/upload', {
			method: "POST",
			headers: {
				Accept: "application/json"
			},
			body: formData,
		});

		let uploadData = await uploadResponse.json();
		if (uploadData.success) {
			product.image = uploadData.image_url;
			addProduct(product);
		}


	}

	return (
		<div className="container mt-5 ">
			<div style={{ margin: "auto" }}>
				<form className="border p-5" style={{ maxWidth: "60vw" }} onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">Product title</label>
						<input type="text" onChange={handleProductChange} value={productDetails.name} placeholder='type here' name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
					<div className="row g-3 mb-3">
						<div className="col">
							<label htmlFor="exampleInputEmail1" className="form-label">price</label>
							<input type="text" className="form-control" onChange={handleProductChange} value={productDetails.old_price} name='old_price' placeholder="type here" aria-label="First name" />
						</div>
						<div className="col">
							<label htmlFor="exampleInputEmail1" className="form-label">Offer price</label>
							<input type="text" className="form-control" onChange={handleProductChange} value={productDetails.new_price} name='new_price' placeholder="type here" aria-label="Last name" />
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">Product category</label>
						<select className="form-select " name='category' onChange={handleProductChange} value={productDetails.category} aria-label="Default select example">
							<option value="women">Women</option>
							<option value="men">Men</option>
							<option value="kid">Kid</option>
						</select>
					</div>

					<div className="mb-3">
						<label htmlFor="file-input" className="form-label">
							<img src={image ? URL.createObjectURL(image) : upload_area} alt="" style={{ width: "120px" }} />
						</label>
						<input onChange={handleImage} name='image' type="file" hidden placeholder='type here' className="form-control" id="file-input" aria-describedby="emailHelp" />
					</div>

					<button type="submit" onClick={uploadProduct} className="btn btn-primary">ADD</button>
				</form>
			</div>
		</div>
	);
}

export default Addproduct;
