import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingAddressScreen from './screens/ShippingAddressScreen'
import SigninScreen from './screens/SigninScreen'
import Header from './layout/Header'
import Footer from './layout/Footer'

function App() {
	return (
		<Router>
			<div className='grid-container'>
				<Header />
				<main>
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/signin' component={SigninScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/shipping' component={ShippingAddressScreen} />
					<Route path='/' component={HomeScreen} exact />
				</main>
				<Footer />
			</div>
		</Router>
	)
}

export default App
