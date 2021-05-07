import React from 'react';

import ItemInBasket from './ItemInBusket/itemInBusket';
import UserCard from './UserCard/UserCard'

import './Busket.scss';

const Busket = ({
  endPrice,
  arrayItemBusket,
  addQuanityProduct,
  deleteProduct,
  refCardNumberInput,
  refCartHolderInput,
  giveDataCard,
  dataCardApi,
  renderName,
  cardNumber,
  holderCardValue,
  refCardValue,
  renderExpires,
  expiresCardValue,
  saveCardNumber,
}) => (
  <div className="busket-wrapper">
    <UserCard
      refCardNumberInput={refCardNumberInput}
      refCartHolderInput={refCartHolderInput}
      giveDataCard={giveDataCard}
      dataCardApi={dataCardApi}
      renderName={renderName}
      cardNumber={cardNumber}
      holderCardValue={holderCardValue}
      refCardValue={refCardValue}
      renderExpires={renderExpires}
      expiresCardValue={expiresCardValue}
      saveCardNumber={saveCardNumber}
    />
    <div className="busket-items-wrapper">
      {arrayItemBusket.map((item, index) => 
        <ItemInBasket
          key={index}
          item={item}
          addQuanityProduct={addQuanityProduct}
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