import React from 'react';

import './CardNumbers.scss';

const CardNumbers = ({ cardValue }) => ( 
  <div className="card-numbers-wrapper">
    {cardValue.map((item, index) => (
      <span
        key={index}
      >
        {item}
      </span>
    ))}
  </div>
);

export default CardNumbers;
