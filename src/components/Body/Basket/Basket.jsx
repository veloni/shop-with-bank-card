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
    />

    {arrayItemBasket.map((item) => 
      <ItemInBasket
        item={item}
        addQuanityProduct={addQuanityProduct}
        deleteProduct={deleteProduct}
      />
    )}
  <span>
    {endPrice}
  </span>
  </div>
);

export default Basket;