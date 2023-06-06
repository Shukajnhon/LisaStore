import React from 'react';
import styled from 'styled-components';
import bagIcon from '../../assets/images/bag-icon.svg';
import Color from 'Color/Color';

export const Shopping = () => {
  return (
    <ShoppingStyle className="shopping-header">
      <div className="shopping-icon">
        <img src={bagIcon} alt="bag-icon" />
      </div>
      <span className="shopping-text">Shopping</span>
    </ShoppingStyle>
  );
};

const ShoppingStyle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  .shopping-text {
    font-size: 18px;
    font-weight: 400;
    color: ${Color.textColor};
  }
`;
