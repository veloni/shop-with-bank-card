import React from 'react';

const CardInput = ({
  refInputCardNumber,
  refCartHolderInput,
  giveDataCard,
  giveNameData,
  refCardValue,
  renderExpires,
}) => (
  <div>
    <div className="card-input-wrapper">
      <span>
        Card number
      </span>
      <input
        className="input-card"
        type="number"
        max="9999999999999999"
       /*  defaultValue={null} */
        onChange={(e) => giveDataCard(e)}
        ref={refInputCardNumber}
      />
    </div>

    <div className="card-input-wrapper">
      <span>
        Cart holder
      </span>
      <input  
        className="input-card"
        type="text"
        maxLength="35"
      /*   defaultValue={null} */
        onChange={(e) => giveNameData(e)}
        ref={refCartHolderInput}
      />
    </div>

    <div className="expires-input-wrapper">
      <div className="expores-input">
        Expires
        <input
          onChange={(e) => renderExpires(e)}
          maxLength="5"
          placeholder="MM/YY"
          className="expieres-input"
        />
      </div>

      <div className="expores-input">
        CVV
        <input
          type="password"
          className="expieres-input"
        />
      </div>
    </div>
  </div>
);

export default CardInput;
