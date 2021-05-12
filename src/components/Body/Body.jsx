import React from 'react';

import ProductListing from './ProductListing/ProductListing';
import Basket from './Basket/Basket';

import useLoadData from '../../hooks/useLoadData';
import useOpenBasket from '../../hooks/useOpenBasket';
import useBasket from '../../hooks/useBasket';
import useApiCard from '../../hooks/useApiCard';

import basketIcon from './img/basket.svg';

import './Body.scss';

const Body = () => {
  const [dataProducts] = useLoadData();

  const [
    isOpenBasket,
    openCloseBasket,
  ] = useOpenBasket();

  const [
    endPrice,
    addItemInBasket,
    arrayItemBasket,
    changeQuanityProduct,
    deleteProduct,
  ] = useBasket();

  const [
    giveDataCard,
    dataCardApi,
    renderName,
    cardNumber,
    holderCardValue,
    renderExpires,
    expiresCardValue,
    isHolderValueCorrect,
    isExpiresValueCorrect,
    isNumberValueCorrect,
  ] = useApiCard();

  return (
    <div className="body-wrapper">
      {isOpenBasket && <ProductListing
        dataProducts={dataProducts}
        addItemInBasket={addItemInBasket}
      />}
      {!isOpenBasket && <Basket
        endPrice={endPrice}
        holderCardValue={holderCardValue}
        expiresCardValue={expiresCardValue}
        isHolderValueCorrect={isHolderValueCorrect}
        isExpiresValueCorrect={isExpiresValueCorrect}
        isNumberValueCorrect={isNumberValueCorrect}
        arrayItemBasket={arrayItemBasket}
        cardNumber={cardNumber}
        dataCardApi={dataCardApi}
        giveDataCard={giveDataCard}
        deleteProduct={deleteProduct}
        renderName={renderName}
        renderExpires={renderExpires}
        changeQuanityProduct={changeQuanityProduct}
      />}
      <img 
        alt="icon basket"
        src={basketIcon}
        className="basket-icon"
        onClick={() => openCloseBasket()}
      />
    </div>
  );
};

export default Body;