import React from 'react';

import './itemInBasket.scss';

const ItemInBasket = ({
  item,
  addQuanityProduct,
  deleteProduct,
}) => (
  item && <div className="basket-item-wrapper">
    <span
      className="busket-product-name"
    >
      {item.productName} 
    </span>
    <div className="quanity-price-wrapper">
      <div className="quanity-change-wrapper">
        <div className="change-quanity">
          <span
            className="icon-add-quanity"
            onClick={() => addQuanityProduct(item, -1)}
          > 
          - 
          </span>  
          <div 
            className="item-quanity"> 
            {item.quanity} 
          </div>
          <span
            className="icon-add-quanity"
            onClick={() => addQuanityProduct(item, 1)}
          > 
          + 
          </span>
        </div>
      </div>
        <span
          className="icon-delete"
          onClick={() => deleteProduct(item)}
        >
          &times;
        </span>
        <span className="product-price-closest">
          {`${item.productPrice * item.quanity} $`} 
        </span>
      </div>
  </div>
);

export default ItemInBasket;