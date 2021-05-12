import React from 'react';
import PropTypes from 'prop-types';

import './CardInput.scss';

const CardInput = ({
  cardNumber,
  holderCardValue,
  expiresCardValue,
  isHolderValueCorrect,
  isExpiresValueCorrect,
  isNumberValueCorrect,
  giveDataCard,
  renderName,
  renderExpires,
}) => (
  <div>
    <div className="card-input-wrapper">
      <span>
        Card number
      </span>
      <input
        className={isNumberValueCorrect ? "card-input-incorrect-value-number-holder" : "card-input-number-holder"}
        type="text"
        maxLength="16"
        defaultValue={cardNumber} 
        onChange={(e) => giveDataCard(e.target.value)}
      />
    </div>
 
    <div className="card-input-wrapper">
      <span>
        Cart holder
      </span>
      <input  
        className={isHolderValueCorrect ? "card-input-incorrect-value-number-holder" : "card-input-number-holder"}
        type="text"
        maxLength="30"
        value={holderCardValue} 
        onChange={(e) => renderName(e.target.value)}
      />
    </div>

    <div className="card-input-expires-cvv-wrapper">
      <div className="card-input-wrapper">
        Expires
        <input
          className={isExpiresValueCorrect ? "card-input-incorrect-expires" : 'card-expires-cvv-input'}
          maxLength="5"
          value={expiresCardValue} 
          onChange={(e) => renderExpires(e.target.value)}
          placeholder="MM/YY"
        />
      </div>
      <div className="card-input-wrapper">
        CVV
        <input
          className="card-expires-cvv-input"
          type="password"
        />
      </div>
    </div>
  </div>
);

CardInput.propTypes = {
  cardNumber: PropTypes.array.isRequired,
  
  holderCardValue: PropTypes.string.isRequired,
  expiresCardValue: PropTypes.string.isRequired,

  isHolderValueCorrect: PropTypes.bool.isRequired,
  isExpiresValueCorrect: PropTypes.bool.isRequired,
  isNumberValueCorrect: PropTypes.bool.isRequired,

  giveDataCard: PropTypes.func.isRequired,
  renderName: PropTypes.func.isRequired,
  renderExpires: PropTypes.func.isRequired,
};

export default CardInput;