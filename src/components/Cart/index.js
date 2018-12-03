import React from 'react';

import CartHeader from '../CartHeader';
import Product from '../Product';

import './index.css';

const Cart = () => (
	<div className="Cart">
		<p>Carrinho</p>
		<CartHeader />
		<Product />
		<Product />
		<Product />
	</div>
)

export default Cart;
