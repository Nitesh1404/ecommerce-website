import React, { useEffect, useState } from 'react';
// import data_product from './assets/data';
import Item from './Item';

const Popular = () => {
	const [data_product, setData_product] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let res = await fetch('http://localhost:5000/product/popularwomen');
			let data = await res.json();
			setData_product(data);
		}
		fetchData();
	}, [])

	return (
		<div className='container'>
			<h1 className='my-3 text-center'>Popular in Women's</h1>
			<div className="container row">
				{data_product.map((product, index) => {
					return (
						<div key={index} className="col-lg-3 col-12 col-sm-6">
							<Item img={product.image} id={product.id} name={product.name} new_price={product.new_price} old_price={product.old_price} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Popular;
