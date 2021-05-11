import React from 'react';
import PropTypes from 'prop-types';

import ItemInBasket from './ItemInBasket/itemInBasket';
import UserCard from './UserCard/UserCard'

import './Basket.scss';

const Basket = ({
  endPrice,
  holderCardValue,
  expiresCardValue,
  isHolderValueCorrect,
  isExpiresValueCorrect,
  isNumberValueCorrect,
  arrayItemBasket,
  cardNumber,
  dataCardApi,
  giveDataCard,
  deleteProduct,
  renderName,
  renderExpires,
  changeQuanityProduct,
}) => (
  <div className="basket-wrapper">
    <UserCard
      holderCardValue={holderCardValue}
      expiresCardValue={expiresCardValue}
      isHolderValueCorrect={isHolderValueCorrect}
      isExpiresValueCorrect={isExpiresValueCorrect}
      isNumberValueCorrect={isNumberValueCorrect}
      dataCardApi={dataCardApi}
      cardNumber={cardNumber}
      giveDataCard={giveDataCard}
      renderName={renderName}
      renderExpires={renderExpires}
    />
    <div className="basket-items-wrapper">
      {arrayItemBasket.map((item, index) => 
        <ItemInBasket
          key={index}
          item={item}
          changeQuanityProduct={changeQuanityProduct}
          deleteProduct={deleteProduct}
        />
      )}
      <div className="basket-sum-buy-wrapper">
        <span className="basket-sum-price-text">
          {endPrice ? `Sum ${endPrice}$` : "Ничего не добавлено"}
        </span>
        <button className="basket-button-buyr">
          BUY
        </button>
      </div>
    </div>
  </div>
);

Basket.propTypes = {
  endPrice: PropTypes.number.isRequired,

  holderCardValue: PropTypes.string.isRequired,
  expiresCardValue: PropTypes.string.isRequired,

  isHolderValueCorrect: PropTypes.bool.isRequired,
  isExpiresValueCorrect: PropTypes.bool.isRequired,
  isNumberValueCorrect: PropTypes.bool.isRequired,

  arrayItemBasket: PropTypes.array.isRequired,
  cardNumber: PropTypes.array.isRequired,
  dataCardApi: PropTypes.object.isRequired,

  giveDataCard: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  renderName: PropTypes.func.isRequired,
  renderExpires: PropTypes.func.isRequired,
  changeQuanityProduct: PropTypes.func.isRequired,
};

export default Basket;