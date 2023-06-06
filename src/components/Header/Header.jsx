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
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid ${Color.borderHeader};
  .header-wrap {
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
`;
