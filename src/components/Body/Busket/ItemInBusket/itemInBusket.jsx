import React from 'react';
import PropTypes from 'prop-types';

import './itemInBusket.scss';

const ItemInBusket = ({
  item,
  changeQuanityProduct,
  deleteProduct,
}) => (

  !item.deleted && <div className="busket-item-wrapper">
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
            onClick={() => changeQuanityProduct(item, -1)}
          > 
            - 
          </span>  
          <div 
            className="busket-item-quanity"> 
            {item.quanity} 
          </div>
          <span
            className="busket-item-icon-add-quanity"
            onClick={() => changeQuanityProduct(item, 1)}
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

ItemInBusket.propTypes = {
  item: PropTypes.object.isRequired,

  changeQuanityProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default ItemInBusket;