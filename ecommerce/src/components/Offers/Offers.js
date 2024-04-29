import React from 'react'
import Offer from "../assets/Offers.png"
import "./Offer.css"

const Offers = () => {
	return (
		<div className='my-4' style={{ background: "linear-gradient(180deg, #8590f47d, white)" }}>
			<div className="container d-flex justify-content-evenly align-items-center">
				<div className="offer-left">
					<h1>Get Exclusive offer's </h1>
					<h1>on yours FAV!!</h1>
					<button className="btn btn-primary rounded-pill mt-3 btn-sm">Check now</button>
				</div>
				<div className="offer-right">
					<img src={Offer} alt="" />
				</div>
			</div>


		</div>
	)
}

export default Offers