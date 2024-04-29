import React, { useContext } from 'react'
import "./Product.css"
import start_image from "../assets/star_icon.png"
import start_dull_image from "../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
	const { product } = props;
	const { addToCart } = useContext(ShopContext);

	return (
		<div>
			<div className='container'>
				<div className=' my-3 d-flex display-container' style={{ gap: "2rem" }}>
					<div className="d-flex" style={{ gap: "10px" }}>
						<div className='d-flex align-items.center flex-column image-box'>
							<img src={product.image} alt="" />
							<img src={product.image} alt="" />
							<img src={product.image} alt="" />
							<img src={product.image} alt="" />
						</div>
						<div className='big-image'>
							<img src={product.image} alt="" />
						</div>
					</div>
					<div className="text-part">
						<h2>{product.name}</h2>
						<div className="start-image">
							<img className="mx-1" src={start_image} alt="" />
							<img className="mx-1" src={start_image} alt="" />
							<img className="mx-1" src={start_image} alt="" />
							<img className="mx-1" src={start_image} alt="" />
							<img className="mx-1" src={start_dull_image} alt="" />
							<span >(112)</span>
						</div>
						<div className='d-flex my-4 price-part' style={{ gap: "20px" }}>
							<h3 style={{ textDecoration: "line-through", color: "grey" }}>₹ {product.old_price}</h3>
							<h3 style={{ color: "#ff5000" }}>₹ {product.new_price}</h3>
						</div>
						<div className='text-desc'>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, sunt dolorum nostrum necessitatibus corporis enim quisquam eius. Deserunt, id itaque?</p>
						</div>
						<div>
							<h5 style={{ color: "#5a5858" }}>Select size</h5>
							<div className='d-flex size-part' style={{ gap: "10px" }}>
								<p className='border rounded p-2'>S</p>
								<p className='border rounded p-2'>M</p>
								<p className='border rounded  p-2'>L</p>
								<p className='border  rounded p-2'>Xl</p>
								<p className='border rounded  p-2'>XXL</p>
							</div>
						</div>
						<button className="btn btn-primary" onClick={() => addToCart(product.id)}> ADD TO CART</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDisplay