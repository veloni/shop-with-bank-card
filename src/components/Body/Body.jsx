import React from 'react';

import ProductListing from './ProductListing/ProductListing';
import Busket from './Busket/Busket';

import useLoadData from '../../hooks/useLoadData';
import useOpenBusket from '../../hooks/useOpenBusket';
import useBusket from '../../hooks/useBusket';
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
    arrayItemBusket,
    addQuanityProduct,
    deleteProduct,
  ] = useBusket();

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
      {!isOpenBusket && <Busket
        endPrice={endPrice}
        arrayItemBusket={arrayItemBusket}
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
        alt="icon busket"
        src={busketIcon}
        className="icon-busket"
        onClick={() => openCloseBusket()}
      />
    </div>
  );
};

export default Body;