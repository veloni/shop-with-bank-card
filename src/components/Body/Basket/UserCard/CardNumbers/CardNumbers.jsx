import React from 'react';

const CardNumbers = ({ cardValue }) => ( 
  <div className="card-value-wrapper">
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
