import React from 'react';
import styled from 'styled-components';
import {Account} from 'components/Account';
import {InputSearch} from 'components/InputSearch';
import {Logo} from 'components/Logo';
import {Shopping} from 'components/Shopping';
import Color from 'Color/Color';

export const Header = () => {
  return (
    <HeaderStyle className="header">
      <div className="header-wrap">
        <InputSearch></InputSearch>
        <Logo></Logo>
        <div className="nav-right">
          <Account></Account>
          <Shopping></Shopping>
        </div>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  border-bottom: 1px solid ${Color.borderHeader};
  background-color: ${Color.backgroundColor1};
  .header-wrap {
    max-width: 1200px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Color.backgroundColor1};
  }
  .nav-right {
    display: flex;
    align-items: center;
  }

  // Mediaquery
  @media (max-width: 1200px) {
    .header-wrap {
      /* background-color: yellow; */
      padding: 0 40px;
    }
  }

  @media (max-width: 992px) {
    .header-wrap {
      /* background-color: red; */
    }
  }

  @media (max-width: 768px) {
    .header-wrap {
      /* background-color: blue; */
    }
    .input-search {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .header-wrap {
      /* background-color: green; */
      padding: 0 4px;
    }
    .logo-text {
      font-size: 32px;
      line-height: 64px;
    }
  }
`;
