import React from 'react';
import PropTypes from 'prop-types';

import './CardNumbers.scss';

const CardNumbers = ({ 
  cardNumber,
 }) => ( 
  <div className="card-numbers-wrapper">
    {cardNumber.map((item, index) => (
      <span
        key={index}
      >
        {item}
      </span>
    ))}
  </div>
);

CardNumbers.propTypes = {
  cardNumber: PropTypes.array.isRequired,
};

export default CardNumbers;
