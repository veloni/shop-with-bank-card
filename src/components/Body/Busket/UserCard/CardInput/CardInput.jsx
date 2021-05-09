import React from 'react';

import './CardInput.scss';

const CardInput = ({
  refCardNumberInput,
  refCartHolderInput,
  giveDataCard,
  renderName,
  renderExpires,
  saveCardNumber,
  holderCardValue,
  expiresCardValue,
  isHolderValueCorrect,
  isExpiresrValueCorrect,
}) => (
  <div>
    <div className="cards-input-wrapper">
      <span>
        Card number
      </span>
      <input
        className="card-input-number-holder"
        type="number"
        maxLength="16" 
        defaultValue={saveCardNumber} 
        onChange={(e) => giveDataCard(e.target.value)}
        ref={refCardNumberInput}
      />
    </div>
 
    <div className="cards-input-wrapper">
      <span>
        Cart holder
      </span>
      <input  
        className={isHolderValueCorrect ? "card-input-incorect-value card-input-number-holder" : "card-input-number-holder"}
        type="text"
        maxLength="35"
        defaultValue={holderCardValue} 
        onChange={(e) => renderName(e.target.value)}
        ref={refCartHolderInput}
      />
    </div>

    <div className="card-input-expores-cvv-wrapper">
      <div className="cards-input-wrapper">
        Expires
        <input
          className={isExpiresrValueCorrect ? "card-input-incorect-value card-expires-cvv-input" : 'card-expires-cvv-input'}
          defaultValue={expiresCardValue} 
          onChange={(e) => renderExpires(e)}
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
