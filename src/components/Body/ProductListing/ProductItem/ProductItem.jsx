import React from 'react';

import './ProductItem.scss';
const ProductItem = ({
  item, 
  addItemBasket
}) => (
  <div className="product-item-wrapper">
    <img 
      alt="logo"
      className="product-item-img" 
      src={`./img/${item.img}`}
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