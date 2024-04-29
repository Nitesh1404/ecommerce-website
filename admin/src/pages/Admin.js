import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Addproduct from '../components/Addproduct'
import Listproduct from '../components/Listproduct'

const Admin = () => {
	return (
		<div className='d-flex'>
			<Sidebar />
			<Routes>
				<Route path='/addproduct' element={<Addproduct />} />
				<Route path='/listproduct' element={<Listproduct />} />
			</Routes>
		</div>
	)
}

export default Admin