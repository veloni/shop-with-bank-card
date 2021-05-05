import React from 'react';

import './UserCard.scss';

const UserCard = ({
  refInputCardNumber,
  refCartHolderInput,
  giveDataCard,
  giveNameData,
  dataCard,
  cardValue,
  nameCardValue,
}) => {

  console.log(dataCard);
  return ( 
    <div className="card-main-wrapper">
      <div className="box-wrapper">
        <div 
          className="card-wrapper"
          style={dataCard && {backgroundColor: dataCard.bankColor}}  
        >
          <img 
            className="card-logo-bank"
            src={dataCard ? dataCard.bankLogoSmallLightSvg : null} 
          />
            <div className="card-value-wrapper">
              {cardValue}
            </div>

          <div className="card-data-wrapper">
            <div className="card-holder-wrapper">
              <span className="card-holder-text">
                Card Holder
              </span>
              <span>
                {nameCardValue}
              </span>
            </div>

            <div className="card-holder-wrapper-data">
              <span className="card-holder-text">
                Expires
              </span>
              <span>
                {}
              </span>
            </div>
          </div>
        </div>

        <div className="card-inputs-wrapper">
          <div className="card-input-wrapper">
            <span>
              cardNumber
            </span>
            <input
              defaultValue={null}
              onChange={(e) => giveDataCard(e)}
              ref={refInputCardNumber}
            />
          </div>
     

          <div className="card-input-wrapper">
            <span>
              cartHolder
            </span>
            <input
              defaultValue={null}
              onChange={(e) => giveNameData(e)}
              ref={refCartHolderInput}
            />
          </div>
        </div>

      <div className="expires-input-wrapper">
        <div className="expores-input">
          Expires
          <input
            className="expieres-input"
          />
        </div>

        <div className="expores-input">
          CVV
          <input
            className="expieres-input"
          />
        </div>

      </div>
      </div>
    </div>
  )
};

export default UserCard;