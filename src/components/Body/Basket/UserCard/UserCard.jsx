import React from 'react';
import PropTypes from 'prop-types';

import CardNumbers from './CardNumbers/CardNumbers';
import CardInput from './CardInput/CardInput';

import './UserCard.scss';

const UserCard = ({
  holderCardValue,
  expiresCardValue,
  isHolderValueCorrect,
  isExpiresValueCorrect,
  isNumberValueCorrect,
  dataCardApi,
  cardNumber,
  giveDataCard,
  renderName,
  renderExpires,
}) => (
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
            src={dataCardApi && dataCardApi.brandLogoDarkPng} 
          />
          <img 
            className="card-logo-img"
            alt=""
            src={dataCardApi && dataCardApi.bankLogoSmallLightSvg}  
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
        cardNumber={cardNumber}
        giveDataCard={giveDataCard}
        renderName={renderName}
        renderExpires={renderExpires}
        holderCardValue={holderCardValue}
        expiresCardValue={expiresCardValue}
        isHolderValueCorrect={isHolderValueCorrect}
        isExpiresValueCorrect={isExpiresValueCorrect}
        isNumberValueCorrect={isNumberValueCorrect}
      />
    </div>
  </div>
);

UserCard.propTypes = {
  holderCardValue: PropTypes.string.isRequired,
  expiresCardValue: PropTypes.string.isRequired,

  isHolderValueCorrect: PropTypes.bool.isRequired,
  isExpiresValueCorrect: PropTypes.bool.isRequired,
  isNumberValueCorrect: PropTypes.bool.isRequired,

  dataCardApi: PropTypes.object.isRequired,
  
  cardNumber: PropTypes.array.isRequired,

  giveDataCard: PropTypes.func.isRequired,
  renderName: PropTypes.func.isRequired,
  renderExpires: PropTypes.func.isRequired,
};

export default UserCard;