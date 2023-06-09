import React from 'react';
import styled from 'styled-components';
import filterIcon from '../../assets/images/filter-icon.svg';
import Color from 'Color/Color';
import Card from 'components/Card/Card';
import productImg1 from '../../assets/images/product-img1.svg';
import productImg2 from '../../assets/images/product-img2.svg';
import productImg3 from '../../assets/images/product-img3.svg';
import productImg4 from '../../assets/images/product-img4.svg';
import productImg5 from '../../assets/images/product-img5.svg';
import productImg6 from '../../assets/images/product-img6.svg';
import productImg7 from '../../assets/images/product-img7.svg';
import productImg8 from '../../assets/images/product-img8.svg';

export const Products = () => {
  return (
    <ProductsStyle className="products" src>
      <div className="products-wrapper">
        <div className="product-title">Or subscribe to the newsletter</div>
        <div className="products-top">
          <div className="nav-product">
            <ul className="nav-product-list">
              <li className="nav-product-item active">
                <span>all products</span>
              </li>
              <li className="nav-product-item">
                <span>t-shirt</span>
              </li>
              <li className="nav-product-item">
                <span>hoodies</span>
              </li>
              <li className="nav-product-item">
                <span>jacket</span>
              </li>
            </ul>
          </div>
          <div className="products-filter">
            <div className="filter-icon">
              <img src={filterIcon} alt="filterIcon" />
            </div>

            <span className="filter-text">Filter</span>
          </div>
        </div>

        <div className="products-list">
          <div className="products-list-items">
            <Card
              hot={'hot'}
              tag={true}
              isDetail={true}
              src={productImg1}
              width={'280px'}
            ></Card>
          </div>
          <div className="products-list-items">
            <Card isDetail={true} src={productImg2} width={'280px'}></Card>
          </div>
          <div className="products-list-items">
            <Card
              hot={'hot'}
              tag={true}
              isDetail={true}
              src={productImg3}
              width={'280px'}
            ></Card>
          </div>
          <div className="products-list-items">
            <Card isDetail={true} src={productImg4} width={'280px'}></Card>
          </div>
          <div className="products-list-items">
            <Card
              isDetail={true}
              sale={'sale'}
              tag={true}
              src={productImg5}
              width={'280px'}
            ></Card>
          </div>
          <div className="products-list-items">
            <Card isDetail={true} src={productImg6} width={'280px'}></Card>
          </div>
          <div className="products-list-items">
            <Card
              tag={true}
              sale={'sale'}
              isDetail={true}
              src={productImg7}
              width={'280px'}
            ></Card>
          </div>
          <div className="products-list-items">
            <Card
              hot={'hot'}
              tag={true}
              isDetail={true}
              src={productImg8}
              width={'280px'}
            ></Card>
          </div>
        </div>
      </div>
    </ProductsStyle>
  );
};

const ProductsStyle = styled.div`
  background-color: #fff;
  padding-bottom: 66px;
  .products-wrapper {
    max-width: 1200px;
    margin: 0 auto;

    .product-title {
      font-size: 50px;
      font-weight: 500;
      color: ${Color.blackColor};
    }

    .products-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 35px 0;
    }
    .nav-product {
      .nav-product-list {
        list-style: none;
        padding: 0;
        display: flex;
        .nav-product-item {
          margin: 0 10px;
          padding: 4px 10px;
          cursor: pointer;
          text-transform: capitalize;
          font-size: 16px;
          color: ${Color.textColor2};
        }
        .active {
          color: ${Color.textColor};
          font-weight: 500;
        }
      }
    }

    .products-filter {
      width: 92px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${Color.textColor};
      cursor: pointer;

      .filter-icon {
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }
      .filter-text {
        font-size: 16px;
        font-weight: 300;
        color: ${Color.whiteColor};
      }
    }

    /* products-list */
    .products-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
    }
  }

  // Mediaquery
  @media (max-width: 1200px) {
    .product-title {
    }

    .products-wrapper {
      margin: 0 30px;
    }
  }

  @media (max-width: 992px) {
    .product-title {
    }
    .products-wrapper .products-list {
      justify-content: space-evenly;
    }
  }

  @media (max-width: 768px) {
    .product-title {
    }
  }

  @media (max-width: 576px) {
    .product-title {
      padding: 0 4px;
    }

    .products-wrapper .nav-product .nav-product-list .nav-product-item {
      margin: 0px 2px;
      padding: 0px 2px;
      cursor: pointer;
    }
  }
`;
