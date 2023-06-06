import Color from 'Color/Color';
import Footer from 'Footer/Footer';
import Header from 'components/Header';
import React from 'react';
import styled from 'styled-components';

const Layout = ({children}) => {
  return (
    <LayoutStyle className="layout">
      <Header></Header>
      {children}
      <Footer></Footer>
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle = styled.div`
  max-width: 1900px;
  margin: 0 auto;
  background-color: ${Color.backgroundColor1};
`;
