import React from 'react';
import styled from 'styled-components';
import userIcon from '../../assets/images/user-icon.svg';
import Color from 'Color/Color';

export const Account = () => {
  return (
    <AccountStyle className="account-header">
      <div className="account-icon">
        <img src={userIcon} alt="user-icon" />
      </div>
      <span className="account-text">Account</span>
    </AccountStyle>
  );
};

const AccountStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .account-text {
    font-size: 18px;
    font-weight: 400;
    color: ${Color.textColor};
  }
`;
