import React from 'react';

import ItemInBasket from './ItemInBasket/itemInBasket';
import UserCard from './UserCard/UserCard'

import './Basket.scss';

const Basket = ({
  endPrice,
  arrayItemBasket,
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
  <div className="basket-main-wrapper">
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
    <div className="item-basket-wrapper">
      {arrayItemBasket.map((item, index) => 
        <ItemInBasket
          key={index}
          item={item}
          addQuanityProduct={addQuanityProduct}
          deleteProduct={deleteProduct}
        />
      )}
      <div className="sum-buy-wrapper">
        <span className="sum-text">
          {endPrice ? `Sum ${endPrice}$` : "Ничего не добавлено"}
        </span>
        <button className="button-close-order">
          BUY
        </button>
      </div>
    </div>
  </div>
);

export default Basket;