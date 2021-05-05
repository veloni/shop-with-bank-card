import React from 'react';

import './ProductItem.scss';

import logo from './img/1.png';

const ProductItem = ({item, addItemBasket}) => {

  return (
    <div className="product-wrapper">
      <img className="img-product" src={logo}/>
      <h2 className>{item.productName}</h2>
      <span className>{item.productPrice}р</span>
      <button 
        className="button-buy-item"
        onClick={() => addItemBasket(item)}
      >
        add to card
      </button>
    </div>
  )};

export default ProductItem;