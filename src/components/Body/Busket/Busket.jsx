import React from 'react';

import ItemInBasket from './ItemInBusket/itemInBusket';
import UserCard from './UserCard/UserCard'

import './Busket.scss';

const Basket = ({
  endPrice,
  arrayItemBusket,
  addQuanityProduct,
  deleteProduct,
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
}) => (
  <div className="busket-wrapper">
    <UserCard
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

export default Basket;