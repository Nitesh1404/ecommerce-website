import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => {
	const { name, img, new_price, old_price, id } = props;
	return (
		<div>
			<div className="card my-3" >
				<Link to={`/product/${id}`}>
					<img src={img} className="card-img-top" alt="..." onClick={() => window.scrollTo(0, 0)} />
				</Link>
				<div className="card-body">
					<p className="card-text">{name}</p>
				</div>
				<div className="card-body">
					<span className='card-text'>₹{new_price} </span>
					<span className='card-text mx-3' style={{ textDecoration: "line-through" }}>₹{old_price} </span>
				</div>
			</div>
		</div>
	)
}

export default Item