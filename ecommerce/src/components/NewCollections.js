import React, { useEffect, useState } from 'react'
// import new_collections from './assets/new_collections'
import Item from './Item'

const NewCollections = () => {
	const [new_collections, setnew_collections] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let collectionRes = await fetch('http://localhost:5000/product/newcollection');
			let collectionData = await collectionRes.json();
			console.log(collectionData);
			setnew_collections(collectionData.newcollection);
		}
		fetchData();
	}, [])


	return (
		<div className='container'>
			<h1 className='my-3 text-center'>New Collectrions</h1>
			<div className="container row">
				{new_collections.map((product, index) => {
					return (
						<div key={index} className="col-lg-3 col-12 col-sm-6">
							<Item img={product.image} id={product.id} name={product.name} new_price={product.new_price} old_price={product.old_price} />
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default NewCollections