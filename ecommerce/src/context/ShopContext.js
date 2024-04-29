import React, { createContext, useEffect, useState } from 'react'
// import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 0; i < 300 + 1; i++) {
		cart[i] = 0;
	}
	return cart;
}

const ShopContextProvider = (props) => {
	const [all_product, setall_product] = useState([]);
	const [cartItem, setCartItem] = useState(getDefaultCart);

	const fetchData = async () => {
		let allProductRes = await fetch('http://localhost:5000/product/allproduct');
		let allProductData = await allProductRes.json();
		setall_product(allProductData);

		if (localStorage.getItem('auth-token')) {
			let authRes = await fetch('http://localhost:5000/product/getcart', {
				method: 'POST',
				headers: {
					Accept: 'application/form-data',
					'auth-token': `${localStorage.getItem('auth-token')}`,
					'Content-Type': 'application/json'
				},
				body: "",
			});

			let authData = await authRes.json();
			setCartItem(authData);
		}
	}

	useEffect(() => {
		fetchData();
	}, [])


	const addToCart = async (itemId) => {
		// setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
		if (localStorage.getItem('auth-token')) {
			const cartResponse = await fetch('http://localhost:5000/product/addcart', {
				method: "POST",
				headers: {
					Accept: "application'json",
					'auth-token': `${localStorage.getItem('auth-token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ itemId: itemId })
			});
			const cartData = await cartResponse.json();
			console.log(cartData);
			fetchData();
		}
	}
	
	const removeFromCart = async (itemId) => {
		// setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
		if (localStorage.getItem('auth-token')) {
			const cartResponse = await fetch('http://localhost:5000/product/removecart', {
				method: "POST",
				headers: {
					Accept: "application'json",
					'auth-token': `${localStorage.getItem('auth-token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ itemId: itemId })
			});
			const cartData = await cartResponse.json();
			console.log(cartData);
			fetchData();
		}
	}

	const getTotalAmount = () => {
		let totalAmount = 0;
		for (const item in cartItem) {
			if (cartItem[item] > 0) {
				let itemInfo = all_product.find((product) => product.id === parseInt(item));
				totalAmount += itemInfo.new_price * cartItem[item];
			}
		}
		return totalAmount;
	}



	const contextValue = { all_product, getDefaultCart, removeFromCart, addToCart, cartItem, getTotalAmount, fetchData }
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)
}

export default ShopContextProvider;