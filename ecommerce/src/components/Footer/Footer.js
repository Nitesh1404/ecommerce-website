import React from 'react'
import whatsapp_icon from "../assets/whatsapp_icon.png"
import instagram_icon from "../assets/instagram_icon.png"
import pintester_icon from "../assets/pintester_icon.png"
import "./Footer.css"

const Footer = () => {
	return (
		<div className=" mt-5 d-flex align-items-center justify-content-center flex-column" style={{ background: "linear-gradient(180deg,white , #8590f47d)" }}>
			<div className="container d-flex justify-content-center">
				<i className="fa-solid fa-shop me-2 footer"></i>
				<span className='mx-3 footer' >ShopYours</span>
			</div>

			<div className="container mt-3 d-flex justify-content-center">
				<img className='mx-2' src={whatsapp_icon} alt="" />
				<img className='mx-2' src={instagram_icon} alt="" />
				<img className='mx-2' src={pintester_icon} alt="" />
			</div>
			<div className="container text-center mt-4 mb-3">
				<hr />
				<h6>Copyright @2024 - All rights reserved</h6>
			</div>

		</div>
	)
}

export default Footer