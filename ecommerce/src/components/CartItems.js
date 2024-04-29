import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartItems = () => {
	const { all_product, cartItem, removeFromCart } = useContext(ShopContext);
	return (
		<div className='container my-4'>
			<div className="  table-responsive ">
				<table className="container table  table-hover table-borderless ">
					<thead className=''>
						<tr>
							<th scope="col">Product</th>
							<th scope="col">Title</th>
							<th scope="col">Price </th>
							<th scope="col">Quantity</th>
							<th scope="col">Total</th>
							<th scope="col">Remove</th>
						</tr>
					</thead>
					<tbody>
						{all_product.map((product, index) => {
							if (cartItem[product.id] > 0) {
								return (
									<tr key={index}>
										<td>
											<img src={product.image} alt="" style={{ width: '50px', height: '50px' }} />
										</td>
										<td>{product.name}</td>
										<td>₹ {product.new_price}</td>
										<td>{cartItem[product.id]}</td>
										<td>₹ {cartItem[product.id] * product.new_price}</td>
										<td> {<i className="fa-solid fa-xmark" onClick={() => removeFromCart(product.id)}></i>}</td>
									</tr>
								)
							}
						}

						)}
					</tbody>
				</table>
			</div>

		</div>
	)
}

export default CartItems