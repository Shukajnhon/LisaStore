import Color from 'Color/Color';
import Card from 'components/Card/Card';
import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import bestSellImg1 from '../../assets/images/product-img6.svg';
import bestSellImg2 from '../../assets/images/product-img7.svg';
import bestSellImg3 from '../../assets/images/product-img8.svg';
import bestSellImg4 from '../../assets/images/product-img1.svg';
import bestSellImg5 from '../../assets/images/product-img5.svg';
import bestSellImg6 from '../../assets/images/product-img2.svg';
import bestSellImg7 from '../../assets/images/product-img4.svg';
import bestSellImg8 from '../../assets/images/product-img3.svg';

export const BestSeller = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 579,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <BestSellerStyle className="best-seller">
      <div className="best-seller-wrap">
        <div className="best-seller-title">Best sellers</div>
        <div className="best-seller-top">
          <div className="nav-seller">
            <ul className="nav-seller-list">
              <li className="nav-seller-item active">
                <span>all products</span>
              </li>
              <li className="nav-seller-item">
                <span>t-shirt</span>
              </li>
              <li className="nav-seller-item">
                <span>hoodies</span>
              </li>
              <li className="nav-seller-item">
                <span>jacket</span>
              </li>
            </ul>
          </div>
          <div className="best-seller-showAll">
            <span className="text">Show All</span>
          </div>
        </div>

        <div className="best-seller-list">
          <Slider {...settings}>
            <Card
              hot={'hot'}
              tag={true}
              isDetail
              width="290px"
              src={bestSellImg1}
            ></Card>
            <Card isDetail width="290px" src={bestSellImg2}></Card>
            <Card isDetail width="290px" src={bestSellImg3}></Card>
            <Card isDetail width="290px" src={bestSellImg4}></Card>
            <Card
              sale={'sale'}
              tag={true}
              isDetail
              width="290px"
              src={bestSellImg5}
            ></Card>
            <Card isDetail width="290px" src={bestSellImg6}></Card>
            <Card isDetail width="290px" src={bestSellImg7}></Card>
            <Card isDetail width="290px" src={bestSellImg8}></Card>
          </Slider>
        </div>
      </div>
    </BestSellerStyle>
  );
};

const BestSellerStyle = styled.div`
  padding: 100px 0;
  background-color: ${Color.whiteColor};
  .best-seller-wrap {
    max-width: 1200px;
    margin: 0 auto;
    /* border: 1px solid red; */
  }

  .best-seller-title {
    font-size: 50px;
    font-weight: 500;
    color: ${Color.blackColor};
  }
  .slick-slider {
    .slick-prev,
    .slick-next {
      top: 37%;
      z-index: 2;
    }
    .slick-prev {
      left: 2px;
    }
    .slick-next {
      right: 32px;
    }

    .slick-prev::before,
    .slick-next::before {
      font-size: 42px;
      color: ${Color.primaryColor};
    }
  }

  .best-seller-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    padding: 36px 0;
    .nav-seller .nav-seller-list {
      list-style: none;
      padding: 0;
      display: flex;
      .nav-seller-item {
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

    /* slick-arrow slick-prev */

    .best-seller-showAll {
      width: 94px;
      height: 100%;
      align-items: center;
      background-color: ${Color.textColor};
      cursor: pointer;
      .text {
        font-weight: 400;
        line-height: 32px;
        color: ${Color.whiteColor};
      }
    }
  }

  .card-img .isDetail-favorite {
    bottom: 0;
  }

  // Mediaquery
  @media (max-width: 1200px) {
    .cardBox {
      width: 354px;
    }
  }

  @media (max-width: 992px) {
    .cardBox {
      width: 268px;
    }
  }

  @media (max-width: 768px) {
    .cardBox {
      width: 310px;
    }
  }

  @media (max-width: 576px) {
    .best-seller-top {
      padding: 28px 0px;
    }
    .best-seller-top .nav-seller .nav-seller-list .nav-seller-item {
      margin: 0px 2px;
      padding: 0px 6px;
    }

    .best-seller-wrap {
      margin: 0px 8px;
    }
    .cardBox {
      width: 100%;
    }
  }
`;
