import React from 'react';

import './CartHeader.css';
import './CartTitle.css';
import './CartTotal.css';

const CartHeader = ({title, total}) => (
	<div className="CartHeader">
		<h1 className="CartTitle">{title}</h1>
		<span className="CartTotal">{total}</span>
	</div>
)

export default CartHeader;
