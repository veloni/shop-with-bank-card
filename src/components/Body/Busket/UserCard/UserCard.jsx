import React from 'react';

import CardNumbers from './CardNumbers/CardNumbers';
import CardInput from './CardInput/CardInput';

import logoBank from './img/logo-bank.svg'

import './UserCard.scss';

const UserCard = ({
  refCardNumberInput,
  refCartHolderInput,
  giveDataCard,
  renderName,
  dataCardApi,
  holderCardValue,
  refCardValue,
  cardNumber,
  renderExpires,
  expiresCardValue,
  saveCardNumber,
}) => {
/*   console.log(dataCardApi); */
  return ( 
    <div className="card-main-wrapper">
      <div className="card-box-wrapper">
        <div 
          className="card-wrapper"
          style={dataCardApi && {backgroundColor: dataCardApi.bankColor}}  
        >
          <div className="card-logo-brand-wrapper">
            <img 
              className="card-brand-img"
              alt=""
              src={dataCardApi ? dataCardApi.brandLogoDarkPng : null} 
            />
            <img 
              className="card-logo-img"
              alt=""
              src={!!dataCardApi ? dataCardApi.bankLogoSmallLightSvg : logoBank} 
            />
          </div>
          <CardNumbers
            cardNumber={cardNumber}
          />
          <div className="card-data-wrapper">
            <div className="card-holder-wrapper">
              <span className="card-holder-text">
                Card Holder
              </span>
              <span className="card-holder-name-user">
                {holderCardValue}
              </span>
            </div>
            <div className="card-holder-wrapper-data">
              <span className="card-holder-text">
                Expires
              </span>
              <span className="card-holder-name-user">
                {expiresCardValue}
              </span>
            </div>
          </div>
        </div>
        <CardInput
          refCardNumberInput={refCardNumberInput}
          refCartHolderInput={refCartHolderInput}
          giveDataCard={giveDataCard}
          renderName={renderName}
          refCardValue={refCardValue}
          renderExpires={renderExpires}
          saveCardNumber={saveCardNumber}
          holderCardValue={holderCardValue}
          expiresCardValue={expiresCardValue}
        />
      </div>
    </div>
  );
};

export default UserCard;