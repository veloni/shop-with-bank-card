import React from 'react';

import './itemInBasket.scss';

const ItemInBasket = ({
  item,
  addQuanityProduct,
  deleteProduct,
}) => {
  return(
  item && <div className="basket-item-wrapper">
    <span>{item.productName} </span>
    <div className="quanity-price-wrapper">
      <div>
        <span
          onClick={() => addQuanityProduct(item, -1)}
        > 
        - 
        </span>  
        <span> {item.quanity} </span>
        <span
         onClick={() => addQuanityProduct(item, 1)}
        > + </span>
      </div>
      <span
        onClick={() => deleteProduct(item)}
      >
        delete 
      </span>
      <span>{item.productPrice * item.quanity} </span>
    </div>
  </div>
  )
};

export default ItemInBasket;