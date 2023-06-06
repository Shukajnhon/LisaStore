import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/images/search-icon.svg';
import Color from 'Color/Color';
export const InputSearch = () => {
  return (
    <InputSearchStyle className="input-search">
      <div className="search-icon">
        <img src={searchIcon} alt="search-icon" />
      </div>
      <input type="text" name="input" id="input" placeholder="Search..." />
    </InputSearchStyle>
  );
};

const InputSearchStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 46px;
  border: 1px solid rgba(5, 5, 5, 0.06);
  border-radius: 10px;
  .search-icon {
    cursor: pointer;
    padding-left: 4px;
  }
  #input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0 8px;
    background-color: ${Color.backgroundColor1};
  }
`;
