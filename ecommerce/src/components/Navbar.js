import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
	const navigate = useNavigate();

	const { cartItem } = useContext(ShopContext)

	const cartItemCount = Object.values(cartItem).reduce((acc, qty) => acc + qty, 0);

	const handleLogout = () => {
		localStorage.removeItem('auth-token');
		navigate('/');
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light" >
			<div className="container-fluid">
				<i className="fa-solid fa-shop me-2" style={{ fontSize: "2rem" }}></i>
				<Link className="navbar-brand" to="/" style={{ fontWeight: "800" }}>ShopYours</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">Shop</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/mens">Men's</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/womens">Women's</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/kids">Kid's</Link>
						</li>


					</ul>
					<ul className="navbar-nav  mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active " aria-current="page" to="/cart"><i className="fa-solid fa-cart-shopping " style={{ fontSize: "1.5rem" }}></i>
								<span className="position-absolute top-40 start-20 translate-middle badge rounded-circle bg-danger" >{cartItemCount > 0 ? cartItemCount : ""}</span>
							</Link>
						</li>
						<li className=' nav-item'>
							{
								localStorage.getItem('auth-token') ? <Link className='nav-link' to="/login"><button className="btn btn-sm btn-outline-primary rounded-pill " onClick={handleLogout} > Logout</button></Link> : <Link className='nav-link' to="/login" ><button className="btn btn-sm btn-outline-primary rounded-pill "> Login</button></Link>
							}

						</li>

					</ul>

				</div>
			</div>
		</nav >
	)
}

export default Navbar