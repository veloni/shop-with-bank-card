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
    refCardNumberInput,
    refCartHolderInput,
    giveDataCard,
    dataCardApi,
    renderName,
    cardNumber,
    holderCardValue,,
    renderExpires,
    expiresCardValue,
    saveCardNumber,
    isHolderValueCorrect,
    isExpiresrValueCorrect,
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
        refCardNumberInput={refCardNumberInput}
        refCartHolderInput={refCartHolderInput}
        giveDataCard={giveDataCard}
        dataCardApi={dataCardApi}
        renderName={renderName}
        cardNumber={cardNumber}
        holderCardValue={holderCardValue}
        renderExpires={renderExpires}
        expiresCardValue={expiresCardValue}
        saveCardNumber={saveCardNumber}
        isHolderValueCorrect={isHolderValueCorrect}
        isExpiresrValueCorrect={isExpiresrValueCorrect}
      />}
      <img 
        alt="icon busket"
        src={busketIcon}
        className="busket-icon"
        onClick={() => openCloseBusket()}
      />
    </div>
  );
};

export default Body;