import React from 'react';

import ProductListing from './ProductListing/ProductListing';
import Basket from './Basket/Basket';

import useLoadData from '../../hooks/useLoadData';
import useOpenBusket from '../../hooks/useOpenBusket';
import useBasketLogic from '../../hooks/useBasketLogic';
import useApiCard from '../../hooks/useApiCard';

import busketIcon from './img/busket.png';

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

  const [
    refInputCardNumber,
    refCartHolderInput,
    giveDataCard,
    dataCard,
    giveNameData,
    cardValue,
    nameCardValue,
    refCardValue,
    renderExpires,
    expiresValue,
  ] = useApiCard();

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
        refInputCardNumber={refInputCardNumber}
        refCartHolderInput={refCartHolderInput}
        giveDataCard={giveDataCard}
        dataCard={dataCard}
        giveNameData={giveNameData}
        cardValue={cardValue}
        nameCardValue={nameCardValue}
        refCardValue={refCardValue}
        renderExpires={renderExpires}
        expiresValue={expiresValue}
      />}
      <img 
        alt="busket-icon"
        src={busketIcon}
        className="icon-busket"
        onClick={() => openCloseBusket()}
      />
    </div>
  );
};

export default Body;