import React from 'react'
import arrow from "./assets/breadcrum_arrow.png";

const BreadCrumbs = (props) => {
	const { product } = props;
	console.log(product)
	return (
		<div className='container mt-3'>
			HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
		</div>
	)
}

export default BreadCrumbs