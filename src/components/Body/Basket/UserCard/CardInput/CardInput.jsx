import React from 'react';

import './CardInput.scss';

const CardInput = ({
  refInputCardNumber,
  refCartHolderInput,
  giveDataCard,
  giveNameData,
  refCardValue,
  renderExpires,
}) => (
  <div>
    <div className="card-input-number-holder-wrapper">
      <span>
        Card number
      </span>
      <input
        className="card-input-number-holder"
        type="number"
        max="9999999999999999"
       /*  defaultValue={null} */
        onChange={(e) => giveDataCard(e)}
        ref={refInputCardNumber}
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
      /*   defaultValue={null} */
        onChange={(e) => giveNameData(e)}
        ref={refCartHolderInput}
      />
    </div>

    <div className="card-input-expores-cvv-wrapper">

      <div className="card-expires-cvv-inputs-box">
        Expires
        <input
          className="card-expires-cvv-input"
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
