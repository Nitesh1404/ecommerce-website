import React from 'react'
import data_product from './assets/data'
import Item from './Item'

const RelatedPeoduct = () => {
	return (
		<div className='container'>
			<h2 className='text-center my-3'>Related product</h2>
			<div className="row">
				{data_product.map((product, index) => {
					return (
						<div key={index} className="col-lg-3 col-12 col-sm-6">
							<Item img={product.image} id={product.id} name={product.name} new_price={product.new_price} old_price={product.old_price} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default RelatedPeoduct