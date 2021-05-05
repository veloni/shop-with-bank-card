import React from 'react';

import ItemInBasket from './ItemInBasket/itemInBasket';

import './Basket.scss';

const Basket = ({
  endPrice,
  arrayItemBasket,
  addQuanityProduct,
  deleteProduct,
}) => (
  <div className="basket-main-wrapper">
    {arrayItemBasket.map((item) => 
      <ItemInBasket
        item={item}
        addQuanityProduct={addQuanityProduct}
        deleteProduct={deleteProduct}
      />
    )}
  <span>
    {endPrice}
  </span>
  </div>
);

export default Basket;