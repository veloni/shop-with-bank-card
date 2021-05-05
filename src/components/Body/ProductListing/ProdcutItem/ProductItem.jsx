import React from 'react';

import './ProductItem.scss';

const ProductItem = ({item}) => (
  <div className="product-wrapper">
    <img src="./img/1.png"/>
    <h2 className>{item.productName}</h2>
    <span className>{item.productPrice}р</span>
    <button className="button-buy-item">
      add to card
    </button>
  </div>
);

export default ProductItem;