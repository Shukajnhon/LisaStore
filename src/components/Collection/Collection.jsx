import React from 'react';
import styled from 'styled-components';
import collectImage from '../../assets/images/collect-img1.svg';
import bagShoppingIcon from '../../assets/images/bag-shopping-icon.svg';
import leftLeft from '../../assets/images/leaf-left.svg';
import leftRight from '../../assets/images/leaf-right.svg';
import {Button} from 'components/Button';
import Color from 'Color/Color';

export const Collection = () => {
  return (
    <CollectStyle className="collection">
      <div className="leaf-left">
        <img src={leftLeft} alt="leftLeft" />
      </div>
      <div className="leaf-right">
        <img src={leftRight} alt="leftLeft" />
      </div>
      <div className="collection-wrap">
        <div className="left">
          <div className="title">Collections</div>
          <div className="collection-text">
            you can explore ans shop many differnt collection from various
            barands here.
          </div>
          <div className="collection-btn">
            <CollectButton
              borderRadius={0}
              width={'227px'}
              height={'72px'}
              label={'Shopping Now'}
            >
              <div className="collect-icon">
                <img src={bagShoppingIcon} alt="bagShoppingIcon" />
              </div>
            </CollectButton>
          </div>
        </div>
        <div className="right">
          <div className="collect-img">
            <img src={collectImage} alt="collectImage" />
          </div>
        </div>
      </div>
    </CollectStyle>
  );
};

const CollectStyle = styled.div`
  padding-top: 120px;
  position: relative;
  margin-bottom: 80px;
  background-color: ${Color.backgroundColor1};

  .leaf-left {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .leaf-right {
    position: absolute;
    right: 0;
    bottom: 40px;
  }

  /* collection-wrap  */
  .collection-wrap {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 100%;
    /* padding: 0 40px 70px 40px; */
  }
  .left {
    width: 60%;
    display: flex;
    flex-direction: column;
    row-gap: 56px;
    .title {
      font-size: 70px;
      font-weight: 400;
      text-align: left;
      color: ${Color.blackColor};
    }
    .collection-text {
      font-size: 30px;
      font-weight: 300;
      line-height: 56px;
      text-align: left;
      text-transform: capitalize;
      color: ${Color.blackColor};
    }

    .collection-btn button:hover {
      background-color: ${Color.hoverColor};
    }
  }
  /* right */
  .right {
    .collect-img {
      border-top-left-radius: 160px;
      border-bottom-right-radius: 160px;
      box-shadow: rgb(240, 240, 240) 15px 15px 0px 0px,
        rgba(0, 0, 0, 0.25) 15px 15px 0px 2px;
    }
    .collect-img img {
      border-top-left-radius: 160px;
      border-bottom-right-radius: 160px;
    }
  }

  // Mediaquery
  @media (max-width: 1200px) {
    .collection-wrap {
      /* padding: 0 40px 70px 40px; */
    }
    .left {
      padding: 0px 0 0 30px;
      max-width: 53%;
    }
  }

  @media (max-width: 992px) {
    .collection-wrap {
    }
  }

  @media (max-width: 768px) {
    .collection-wrap {
      padding: 0;
      justify-content: center;
    }
    .left {
      max-width: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      row-gap: 34px;
      padding: 22px;
      .collection-text {
        text-align: center;
      }
    }

    .right {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .collection-wrap {
      padding: 0 4px;
    }
  }
`;

const CollectButton = styled(Button)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  .btn-title {
    position: relative;
    font-size: 24px;
    font-weight: 400;
    margin-left: 6px;
  }
`;
