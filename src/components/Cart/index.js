import React from 'react';
import PropTypes from 'prop-types';

import CartHeader from '../CartHeader';
import Product from '../Product';

import './index.css';

const Cart = ({products, onDeleteProduct}) => {
	const calcTotalProducts = () => {
		let total = 0;

		for (let product of products) {
			total = total + product.price;
		}

		return total;
	};

	return (
		<div className="Cart">
			<CartHeader
				title="Carrinho"
				total={calcTotalProducts()}
			/>
			{products.map((product) => (
				<Product
					key={product.id}
					name="Produto 1"
					price={10}
					onDelete={onDeleteProduct}
				/>
			))}
		</div>
	)
}

Cart.propTypes = {
	products: PropTypes.array
};

Cart.defaultProps = {
	products: []
};

export default Cart;
