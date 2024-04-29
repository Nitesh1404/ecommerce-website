import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import "./CartTotal.css"

const CartTotal = () => {
	const { getTotalAmount } = useContext(ShopContext);
	return (
		<div className='container'>
			<div className='d-flex justify-content-between card-total-part' style={{ gap: "10px" }}>
				<div className="cart-total  " style={{ width: "500px" }}>
					<h3>Cart Totals</h3>
					<div className='container d-flex justify-content-between my-3'>
						<span>subtotal</span>
						<span>₹ {getTotalAmount()}</span>
					</div>
					<div className='container d-flex justify-content-between my-3'>
						<span> Shipping fee </span>
						<span>Free</span>
					</div>
					<div className='container d-flex justify-content-between my-3'>
						<span> <strong>Total</strong> </span>
						<span><strong>₹ {getTotalAmount()} </strong></span>
					</div>
				</div>
				<div>
					<p> <i>If you have promo code enter it below</i> </p>
					<div className="promo d-flex " >
						<input className="form-control me-2" type="text" placeholder="Promo code" aria-label="Search" style={{ backgroundColor: "#e4e4e4" }} />
						<button className="btn btn-dark" >Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartTotal