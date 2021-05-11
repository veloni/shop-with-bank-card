import React from 'react';

import './CardInput.scss';

const CardInput = ({
  cardNumber,
  refCardNumberInput,
  giveDataCard,
  renderName,
  renderExpires,
  holderCardValue,
  expiresCardValue,
  isHolderValueCorrect,
  isExpiresValueCorrect,
  isNumberValueCorrect,
}) => (
  <div>
    <div className="cards-input-wrapper">
      <span>
        Card number
      </span>
      <input
        className={isNumberValueCorrect ? "card-input-incorect-value-number-holder" : "card-input-number-holder"}
        type="text"
        maxLength="16"
        defaultValue={cardNumber} 
        onChange={(e) => giveDataCard(e.target.value)}
        ref={refCardNumberInput}
      />
    </div>
 
    <div className="cards-input-wrapper">
      <span>
        Cart holder
      </span>
      <input  
        className={isHolderValueCorrect ? "card-input-incorect-value-number-holder" : "card-input-number-holder"}
        type="text"
        maxLength="35"
        defaultValue={holderCardValue} 
        onChange={(e) => renderName(e.target.value)}
      />
    </div>

    <div className="card-input-expores-cvv-wrapper">
      <div className="cards-input-wrapper">
        Expires
        <input
          className={isExpiresValueCorrect ? "card-input-incorect-expires" : 'card-expires-cvv-input'}
          value={expiresCardValue} 
          onChange={(e) => renderExpires(e.target.value)}
          maxLength="5"
          placeholder="MM/YY"
        />
      </div>
      <div className="cards-input-wrapper">
        CVV
        <input
          className="card-expires-cvv-input"
          type="password"
        />
      </div>
    </div>
  </div>
);

export default CardInput;
