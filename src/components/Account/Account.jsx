import React from 'react';
import styled from 'styled-components';
import userIcon from '../../assets/images/user-icon.svg';
import Color from 'Color/Color';

export const Account = () => {
  return (
    <AccountStyle className="account-header">
      <div className="account-header-wrap">
        <div className="account-icon">
          <img src={userIcon} alt="user-icon" />
        </div>
        <span className="account-text">Account</span>{' '}
      </div>
    </AccountStyle>
  );
};

const AccountStyle = styled.div`
  cursor: pointer;
  .account-header-wrap {
    display: flex;
    align-items: center;
  }
  .account-header-wrap:hover .account-text {
    color: ${Color.primaryColor};
  }
  /* .account-header-wrap:hover .account-icon {
    color: ${Color.primaryColor};
  } */
  .account-text {
    font-size: 18px;
    font-weight: 400;
    color: ${Color.textColor};
  }
`;
