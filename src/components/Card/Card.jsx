import React from 'react';

const Card = ({src, alt, name, amount}) => {
  return (
    <div className="cardBox">
      <div className="card-img">
        <img src={src} alt={alt} />

        <div className="detail">
          <div className="left">
            <div className="name">{name}</div>
          </div>

          <div className="right">
            <div className="amount">{amount}</div>
            <div className="product">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
