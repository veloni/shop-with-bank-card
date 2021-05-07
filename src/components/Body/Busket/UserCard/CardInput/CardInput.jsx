import React from 'react';

import './CardInput.scss';

const CardInput = ({
  refCardNumberInput,
  refCartHolderInput,
  giveDataCard,
  renderName,
  refCardValue,
  renderExpires,
  cardNumber,
  saveCardNumber,
  holderCardValue,
  expiresCardValue,
}) => (
  <div>

    <div className="card-input-number-holder-wrapper">
      <span>
        Card number
      </span>
      <input
        className="card-input-number-holder"
        maxLength="17"
        defaultValue={saveCardNumber} 
        onChange={(e) => giveDataCard(e)}
        ref={refCardNumberInput}
      />
    </div>

    <div className="card-input-number-holder-wrapper">
      <span>
        Cart holder
      </span>
      <input  
        className="card-input-number-holder"
        type="text"
        maxLength="35"
        defaultValue={holderCardValue} 
        onChange={(e) => renderName(e)}
        ref={refCartHolderInput}
      />
    </div>

    <div className="card-input-expores-cvv-wrapper">
      <div className="card-expires-cvv-inputs-box">
        Expires
        <input
          className="card-expires-cvv-input"
          defaultValue={expiresCardValue} 
          onChange={(e) => renderExpires(e)}
          maxLength="5"
          placeholder="MM/YY"
        />
      </div>
      <div className="card-expires-cvv-inputs-box">
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
