import React from 'react';

import './CardNumbers.scss';

const CardNumbers = ({ cardNumber }) => ( 
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

export default CardNumbers;
