import React from 'react';

import ProductListing from './ProductListing/ProductListing';
import Basket from './Basket/Basket';

import useLoadData from '../../hooks/useLoadData';
import useOpenBusket from '../../hooks/useOpenBusket';
import useBasketLogic from '../../hooks/useBasketLogic';

import './Body.scss';

const Body = () => {
  const [dataProducts] = useLoadData();

  const [    
    isOpenBusket,
    openCloseBusket,
  ] = useOpenBusket();

  const [
    endPrice,
    addItemBasket,
    arrayItemBasket,
    addQuanityProduct,
    deleteProduct,
  ] = useBasketLogic();

  return (
    <div className="body-wrapper">
      {isOpenBusket && <ProductListing
        dataProducts={dataProducts}
        addItemBasket={addItemBasket}
      />}
      {!isOpenBusket && <Basket
        endPrice={endPrice}
        arrayItemBasket={arrayItemBasket}
        addQuanityProduct={addQuanityProduct}
        deleteProduct={deleteProduct}
      />}

      <div 
        className="icon-busket"
        onClick={() => openCloseBusket()}
      >
        OpenBasket
      </div>
    </div>
  );
};

export default Body;