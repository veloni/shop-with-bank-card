import React from 'react';

import './ProductItem.scss';

const ProductItem = ({item, addItemBasket}) => (
  <div className="product-wrapper">
    <img src=""/>
    <h2 className>{item.productName}</h2>
    <span className>{item.productPrice}р</span>
    <button 
      className="button-buy-item"
      onClick={() => addItemBasket(item)}
    >
      add to card
    </button>
  </div>
);

export default ProductItem;