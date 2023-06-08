import Color from 'Color/Color';
import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import styled from 'styled-components';
import followImg1 from '../../assets/images/follow-img1.svg';
import followImg2 from '../../assets/images/follow-img2.svg';
import followImg3 from '../../assets/images/follow-img3.svg';
import followImg4 from '../../assets/images/follow-img4.svg';
import followImg5 from '../../assets/images/follow-img5.svg';
import followImg6 from '../../assets/images/follow-img6.svg';

export const Follow = ({width, height}) => {
  return (
    <FollowStyle className="follow" width="180px" height="180px">
      <div className="follow-wrap">
        <div className="follow-title">
          Follow products and discounts on Instagram
        </div>
        <div className="follow-list">
          <div className="follow-item">
            <ItemImage src={followImg1}></ItemImage>
          </div>
          <div className="follow-item">
            <ItemImage src={followImg2}></ItemImage>
          </div>
          <div className="follow-item">
            <ItemImage src={followImg3}></ItemImage>
          </div>
          <div className="follow-item">
            <ItemImage src={followImg4}></ItemImage>
          </div>
          <div className="follow-item">
            <ItemImage src={followImg5}></ItemImage>
          </div>
          <div className="follow-item">
            <ItemImage src={followImg6}></ItemImage>
          </div>
        </div>

        <div className="follow-detail">
          <span className="text">@lisa.official</span>
        </div>
      </div>
    </FollowStyle>
  );
};

const ItemImage = ({src}) => {
  return (
    <div className="item-img">
      <div className="overlay"></div>
      <img src={src} alt="" />
      <div className="item-instagram-icon">
        <BsInstagram></BsInstagram>
      </div>
    </div>
  );
};

const FollowStyle = styled.div`
  padding-top: 60px;
  padding-bottom: 100px;
  max-width: 1920px;
  margin: 0 auto;
  background-color: ${Color.backgroundColor1};

  .follow-wrap {
    max-width: 1200px;
    margin: 0 auto;
  }
  .follow-title {
    font-size: 50px;
    color: ${Color.blackColor};
    text-align: center;
    margin-bottom: 60px;
  }

  .item-img {
    position: relative;
    cursor: pointer;
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    img {
      width: 100%;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: all 0.3s ease;
    }
    .item-instagram-icon {
      visibility: hidden;
      width: 44px;
      height: 44px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.3s linear;
      svg {
        width: 100%;
        height: 100%;
        color: ${Color.whiteColor};
      }
    }
  }

  .item-img:hover .item-instagram-icon {
    visibility: visible;
    opacity: 1;
  }
  .item-img:hover .overlay {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .follow-list {
    width: calc(100% + 20px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
  }

  .follow-detail {
    margin-top: 70px;
  }

  .follow-detail .text {
    font-size: 28px;
    font-weight: 500;
    color: ${Color.primaryColor};
  }

  // Mediaquery
  @media (max-width: 1200px) {
    .follow-wrap {
      margin: 0 30px;
    }

    .follow-list {
      justify-content: normal;
      column-gap: 20px;
      row-gap: 20px;
    }

    .item-img {
      max-width: 218px;
      max-height: 218px;
    }
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    .follow-list {
      justify-content: center;
    }
  }

  @media (max-width: 576px) {
  }
`;
