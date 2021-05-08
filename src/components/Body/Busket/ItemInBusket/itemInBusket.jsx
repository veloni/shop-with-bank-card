import React from 'react';

import './itemInBusket.scss';

const ItemInBasket = ({
  item,
  addQuanityProduct,
  deleteProduct,
}) => (
  item && <div className="busket-item-wrapper">
    <span
      className="busket-product-name"
    >
      {item.productName} 
    </span>
    <div className="busket-quanity-price-wrapper">
      <div className="busket-quanity-change-wrapper">
        <div className="busket-item-change-quanity">
          <span
            className="busket-item-icon-add-quanity"
            onClick={() => addQuanityProduct(item, -1)}
          > 
            - 
          </span>  
          <div 
            className="busket-item-quanity"> 
            {item.quanity} 
          </div>
          <span
            className="busket-item-icon-add-quanity"
            onClick={() => addQuanityProduct(item, 1)}
          > 
            + 
          </span>
        </div>
      </div>
        <span
          className="busket-item-icon-delete"
          onClick={() => deleteProduct(item)}
        >
          &times;
        </span>
        <span className="busket-item-price-end">
          {`${item.productPrice * item.quanity} $`} 
        </span>
      </div>
  </div>
);

export default ItemInBasket;