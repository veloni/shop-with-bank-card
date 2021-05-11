import React from 'react';
import PropTypes from 'prop-types';

import ItemInBusket from './ItemInBusket/itemInBusket';
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
  isHolderValueCorrect,
  isExpiresValueCorrect,
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
      isHolderValueCorrect={isHolderValueCorrect}
      isExpiresValueCorrect={isExpiresValueCorrect}
      isNumberValueCorrect={isNumberValueCorrect}
    />
    <div className="busket-items-wrapper">
      {arrayItemBusket.map((item, index) => 
        <ItemInBusket
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

Busket.propTypes = {
  endPrice: PropTypes.number.isRequired,

  holderCardValue: PropTypes.string.isRequired,
  expiresCardValue: PropTypes.string.isRequired,

  isHolderValueCorrect: PropTypes.bool.isRequired,
  isExpiresValueCorrect: PropTypes.bool.isRequired,
  isNumberValueCorrect: PropTypes.bool.isRequired,

  arrayItemBusket: PropTypes.array.isRequired,
  cardNumber: PropTypes.array.isRequired,
  dataCardApi: PropTypes.object.isRequired,

  refCardNumberInput: PropTypes.any.isRequired,

  giveDataCard: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  renderName: PropTypes.func.isRequired,
  renderExpires: PropTypes.func.isRequired,
  changeQuanityProduct: PropTypes.func.isRequired,
};

export default Busket;