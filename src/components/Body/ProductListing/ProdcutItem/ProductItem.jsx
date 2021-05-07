import React from 'react';

import './ProductItem.scss';

import logo from './img/1.png';

const ProductItem = ({
  item, 
  addItemBasket
}) => (
  <div className="product-item-wrapper">
    <img 
      alt="logo"
      className="product-item-img" 
      src={logo}
    />
    <h2>{item.productName}</h2>
    <span>{item.productPrice}р</span>
    <button 
      className="product-item-button-buy"
      onClick={() => addItemBasket(item)}
    >
      add to card
    </button>
  </div>
);
export default ProductItem;