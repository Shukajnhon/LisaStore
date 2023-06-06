import React from 'react';
import styled from 'styled-components';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsFillBagFill} from 'react-icons/bs';

import bagIcon from '../../assets/images/bag-shopping-icon.svg';
import searchIcon from '../../assets/images/search-icon.svg';

import Color from 'Color/Color';

const Card = ({
  width,
  height,
  src,
  alt,
  name,
  amount,
  sale,
  hot,
  productName,
  productType,
  price,
  type,
  tag,
}) => {
  return (
    <CardStyle className="cardBox" width={width} height={height}>
      <div className="card-img">
        <img src={src} alt={alt} />
        {tag && (
          <div className="card-tag">
            <div className="sale">
              <div className="sale-text">{sale}</div>
            </div>

            <div className="hot">
              <div className="hot-text">{hot}</div>
            </div>
          </div>
        )}

        {!type ? (
          <div className="detail">
            <div className="left">
              <div className="name">{name} Jeans</div>
            </div>

            <div className="right">
              <div className="amount">{amount} 100</div>
              <div className="product">Products</div>
            </div>
          </div>
        ) : (
          <div className="type-favorite">
            <div className="left-icon">
              <div className="detail-favorite-icon">
                <img src={bagIcon} alt="bagIcon" />
                {/* <AiOutlineHeart></AiOutlineHeart> */}
              </div>
              <div className="detail-search-icon">
                <img src={searchIcon} alt="searchIcon" />
              </div>
            </div>

            <div className="right-icon">
              <div className="detail-shop">
                <div className="detail-bag-icon">
                  {/* <img src={bagIcon} alt="bagIcon" /> */}
                  <BsFillBagFill></BsFillBagFill>
                </div>
                <span className="text">Shop Now</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {type && (
        <div className="card-body">
          <div className="body-title">
            <span>{productName} Adicolor Classics Joggers</span>
          </div>
          <div className="body-content">
            <div className="product-type">{productType} Dress</div>
            <div className="price">${price} 63.85</div>
          </div>
        </div>
      )}
    </CardStyle>
  );
};

export default Card;

const CardStyle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  .card-img {
    position: relative;
    width: 100%;

    img {
      width: 100%;
      cursor: pointer;
    }

    .card-tag {
      position: absolute;
      top: 10px;
      left: 0;
      background-color: ${Color.textColor};
      color: ${Color.whiteColor};
      text-transform: uppercase;
      width: 52px;
      height: 24px;
      text-align: center;
      font-size: 12px;
      line-height: 24px;
      .hot {
        background-color: ${Color.primaryColor};
        color: ${Color.whiteColor};
      }
    }

    .detail {
      display: flex;
      visibility: hidden;
      transition: all 0.3s linear;
      opacity: 0;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      font-weight: 500;
      line-height: 52px;
      height: 52px;
      background-color: ${Color.textColor};
      color: ${Color.whiteColor};
      position: absolute;
      bottom: 4px;
      left: 0;
      width: 100%;
      .left {
        margin-left: 12px;
      }
      .right {
        display: flex;
        align-items: center;
        margin-right: 12px;

        .amount {
          margin-right: 6px;
        }
      }
    }

    .type-favorite {
      position: absolute;
      bottom: 4px;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${Color.textColor};
      height: 56px;
      transition: all 0.3s linear;
      opacity: 0;

      .left-icon {
        display: flex;
        align-items: center;
        margin-left: 12px;
      }

      .detail-favorite-icon,
      .detail-search-icon,
      .detail-bag-icon {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
      .detail-favorite-icon {
        margin-right: 20px;
      }
      .detail-bag-icon {
        margin-right: 8px;
      }

      .right-icon {
        margin-right: 12px;
        .detail-shop {
          display: flex;
          align-items: center;
          cursor: pointer;

          .text {
            font-size: 20px;
            font-weight: 500;
            color: ${Color.whiteColor};
          }

          .detail-bag-icon svg {
            width: 100%;
            height: 90%;
            color: ${Color.whiteColor};
          }
        }
      }
      .right-icon:hover .text {
        color: ${Color.primaryColor};
        /* filter: invert(65%) sepia(35%) saturate(5991%) hue-rotate(323deg) brightness(106%) contrast(102%); */
      }
      .right-icon:hover .detail-bag-icon svg {
        color: ${Color.primaryColor};
      }
    }
  }

  .card-img:hover .detail,
  .card-img:hover .type-favorite {
    visibility: visible;
    opacity: 1;
  }
  .card-body {
    .body-title {
      font-size: 16px;
      font-weight: 600;
      margin: 20px 0;
    }
    padding: 0 12px;
    .body-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .product-type {
        font-size: 16px;
        font-weight: 400;
        color: ${Color.textColor3};
      }
      .price {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;

Card.defaultProps = {
  width: '300px',
};
