import React from 'react';
import PropTypes from 'prop-types';

import './itemInBasket.scss';

const ItemInBasket = ({
  item,
  changeQuanityProduct,
  deleteProduct,
}) => (
  !item.deleted && <div className="basket-item-wrapper">
    <span
      className="basket-product-name"
    >
      {item.productName} 
    </span>
    <div className="basket-quanity-price-wrapper">
      <div className="basket-quanity-change-wrapper">
        <div className="basket-item-change-quanity">
          <span
            className="basket-item-icon-add-quanity"
            onClick={() => changeQuanityProduct(item, -1)}
          > 
            - 
          </span>  
          <div 
            className="basket-item-quanity"> 
            {item.quanity} 
          </div>
          <span
            className="basket-item-icon-add-quanity"
            onClick={() => changeQuanityProduct(item, 1)}
          > 
            + 
          </span>
        </div>
      </div>
        <span
          className="basket-item-icon-delete"
          onClick={() => deleteProduct(item)}
        >
          &times;
        </span>
        <span className="basket-item-price-end">
          {`${item.productPrice * item.quanity} $`} 
        </span>
      </div>
  </div>
);

ItemInBasket.propTypes = {
  item: PropTypes.object.isRequired,

  changeQuanityProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default ItemInBasket;