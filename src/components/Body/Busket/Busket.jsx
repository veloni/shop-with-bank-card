import React from 'react';

import ItemInBasket from './ItemInBusket/itemInBusket';
import UserCard from './UserCard/UserCard'

import './Busket.scss';

const Busket = ({
  endPrice,
  arrayItemBusket,
  changeQuanityProduct,
  deleteProduct,
  refCardNumberInput,
  giveDataCard,
  dataCardApi,
  renderName,
  cardNumber,
  holderCardValue,
  renderExpires,
  expiresCardValue,
  saveCardNumber,
  isHolderValueCorrect,
  isExpiresrValueCorrect,
  isNumberValueCorrect,
}) => (
  <div className="busket-wrapper">
    <UserCard
      refCardNumberInput={refCardNumberInput}
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
      isNumberValueCorrect={isNumberValueCorrect}
    />
    <div className="busket-items-wrapper">
      {arrayItemBusket.map((item, index) => 
        <ItemInBasket
          key={index}
          item={item}
          changeQuanityProduct={changeQuanityProduct}
          deleteProduct={deleteProduct}
        />
      )}
      <div className="busket-sum-buy-wrapper">
        <span className="busket-sum-price-text">
          {endPrice ? `Sum ${endPrice}$` : "Ничего не добавлено"}
        </span>
        <button className="busket-button-buyr">
          BUY
        </button>
      </div>
    </div>
  </div>
);

export default Busket;