import React from 'react';

import './Product.css';
import './ProductDelete.css';
import './ProductName.css';
import './ProductPrice.css';

const Product = ({name, price, onDelete}) => (
	<div className="Product">
		<span className="ProductName">{name}</span>
		<span className="ProductPrice">{price}</span>
		<button
			className="ProductDelete"
			onClick={onDelete}
		>
			X
		</button>
	</div>
)

export default Product;
