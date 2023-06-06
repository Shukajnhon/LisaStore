import React from 'react';
import styled from 'styled-components';

export const Logo = ({title}) => {
  return (
    <LogoStyled className="logo">
      <span className="logo-text">{title || 'Lisa Store'}</span>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  font-size: 42px;
  font-weight: 400;
`;
