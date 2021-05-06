import React from 'react';

import CardNumbers from './CardNumbers/CardNumbers';
import CardInput from './CardInput/CardInput';

import logoBank from './img/logo-bank.svg'

import './UserCard.scss';

const UserCard = ({
  refInputCardNumber,
  refCartHolderInput,
  giveDataCard,
  giveNameData,
  dataCard,
  nameCardValue,
  refCardValue,
  cardValue,
  renderExpires,
  expiresValue,
}) => {
/*   console.log(dataCard); */
  return ( 
    <div className="card-main-wrapper">
      <div className="box-wrapper">
        <div 
          className="card-wrapper"
          style={dataCard && {backgroundColor: dataCard.bankColor}}  
        >
          <div className="card-logo-brand-wrapper">
            <img 
              className="brand-logo"
              alt=""
              src={dataCard ? dataCard.brandLogoDarkPng : null} 
            />
            <img 
              className="card-logo-bank"
              alt=""
              src={!!dataCard ? dataCard.bankLogoSmallLightSvg : logoBank} 
            />
          </div>
          <CardNumbers
            cardValue={cardValue}
          />
          <div className="card-data-wrapper">
            <div className="card-holder-wrapper">
              <span className="card-holder-text">
                Card Holder
              </span>
              <span className="card-holder-name-user">
                {nameCardValue}
              </span>
            </div>
            <div className="card-holder-wrapper-data">
              <span className="card-holder-text">
                Expires
              </span>
              <span className="card-holder-name-user">
                {expiresValue}
              </span>
            </div>
          </div>
        </div>
        <CardInput
          refInputCardNumber={refInputCardNumber}
          refCartHolderInput={refCartHolderInput}
          giveDataCard={giveDataCard}
          giveNameData={giveNameData}
          refCardValue={refCardValue}
          renderExpires={renderExpires}
        />
      </div>
    </div>
  );
};

export default UserCard;