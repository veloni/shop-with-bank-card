import React from 'react';

import ProductListing from './ProductListing/ProductListing';

import useLoadData from '../../hooks/useLoadData';
import useOpenBusket from '../../hooks/useOpenBusket';

import './Body.scss';

const Body = () => {
  const [dataProducts] = useLoadData();
  const [    
    isOpenBusket,
    openCloseBusket,
  ] = useOpenBusket();

  return (
    <div className="body-wrapper">
      {isOpenBusket && <ProductListing
        dataProduct={dataProducts}
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