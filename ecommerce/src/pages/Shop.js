import React from 'react'
import Hero from '../components/Hero/Hero'
import Pupular from '../components/Pupular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections'

const Shop = () => {
	return (
		<div>
			<Hero />
			<Pupular />
			<Offers />
			<NewCollections />
		</div>
	)
}

export default Shop