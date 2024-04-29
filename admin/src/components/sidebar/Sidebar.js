import React from 'react'
import add_product_img from '../../assets/Product_Cart.svg'
import product_list from "../../assets/Product_list_icon.svg"
import { Link } from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className="add-product d-flex p-3">
				<img src={add_product_img} alt="" />
				<Link className='navbar-brand nav-link text-dark' to="/addproduct"> Add Product</Link>
			</div>
			<div className="add-product d-flex p-3">
				<img src={product_list} alt="" />
				<Link className='navbar-brand nav-link text-dark' to="/listproduct"> Product List</Link>
			</div>
		</div>
	)
}

export default Sidebar