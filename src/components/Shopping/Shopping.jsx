import React from 'react';
import styled from 'styled-components';
import {ReactComponent as BagIcon} from '../../assets/images/bag-icon.svg';
import Color from 'Color/Color';

export const Shopping = () => {
  return (
    <ShoppingStyle className="shopping-header">
      <div className="shopping-header-wrap">
        <div className="shopping-icon">
          {/* <img src={bagIcon} alt="bag-icon" /> */}
          <BagIcon></BagIcon>
        </div>
        <span className="shopping-text">Shopping</span>
      </div>
    </ShoppingStyle>
  );
};

const ShoppingStyle = styled.div`
  margin-left: 20px;
  cursor: pointer;
  .shopping-header-wrap {
    display: flex;
    align-items: center;
  }
  .shopping-header-wrap:hover .shopping-text {
    color: ${Color.primaryColor};
  }
  .shopping-header-wrap:hover svg path {
    fill: ${Color.primaryColor};
  }

  .shopping-icon {
    margin-right: 4px;
  }
  .shopping-text {
    font-size: 18px;
    font-weight: 400;
    color: ${Color.textColor};
  }
`;
