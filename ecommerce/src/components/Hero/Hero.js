import React from 'react'
import './Hero.css';
import Shopping from "../assets/shopping.png"

const Hero = () => {
	return (
		<div className="hero-container d-flex align-items-center">
			<div className='container hero-box  d-flex justify-content-around align-items-center'>
				<div className='hero-left-container'>
					<h5>HURRY !! New Arrivals only </h5>
					<h1>New 😍</h1>
					<h1>Collections</h1>
					<h1>for everyone</h1>
					<button className="btn btn-primary rounded-pill mt-3 btn-responsive  ">Latest collections &#8594;</button>
				</div>
				<div>
					<img src={Shopping} alt="Shopping img" style={{ width: "100%" }} />
				</div>
			</div>
		</div>

	)
}

export default Hero