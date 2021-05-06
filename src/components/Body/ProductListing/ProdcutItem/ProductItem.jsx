import React from 'react';

import './ProductItem.scss';

import logo from './img/1.png';

const ProductItem = ({
  item, 
  addItemBasket
}) => (
  <div className="product-wrapper">
    <img 
      alt="logo"
      className="img-product" 
      src={logo}
    />
    <h2>{item.productName}</h2>
    <span>{item.productPrice}р</span>
    <button 
      className="button-buy-item"
      onClick={() => addItemBasket(item)}
    >
      add to card
    </button>
  </div>
);
export default ProductItem;