import React from 'react';
import styled from 'styled-components';
import brand1 from '../../assets/images/brand-1.svg';
import brand2 from '../../assets/images/brand-2.svg';
import brand3 from '../../assets/images/brand-3.svg';
import brand4 from '../../assets/images/brand-4.svg';
import brand5 from '../../assets/images/brand-5.svg';
import exploreImg1 from '../../assets/images/explore-img1.svg';
import exploreImg2 from '../../assets/images/explore-img2.svg';
import exploreImg3 from '../../assets/images/explore-img3.svg';
import exploreImg4 from '../../assets/images/explore-img4.svg';
import exploreImg5 from '../../assets/images/explore-img5.svg';
import Color from 'Color/Color';
import Card from 'components/Card/Card';

export const Explore = () => {
  return (
    <ExploreStyle className="explore">
      <div className="explore-wrapper">
        <div className="explore-brand">
          <div className="brand-1 brand-img ">
            <img src={brand1} alt="brand-1" />
          </div>
          <div className="brand-2 brand-img">
            <img src={brand2} alt="brand-2" />
          </div>
          <div className="brand-3 brand-img">
            <img src={brand3} alt="brand-3" />
          </div>
          <div className="brand-4 brand-img">
            <img src={brand4} alt="brand-4" />
          </div>
          <div className="brand-5 brand-img">
            <img src={brand5} alt="brand-5" />
          </div>
        </div>

        {/* Image */}
        <div className="explore-images">
          <div className="explore-title">
            <span>Explore new and popular styles</span>
          </div>

          <div className="row">
            <div className="col-6 col-left">
              <Card src={exploreImg1} width="100%" height="100%"></Card>
            </div>
            <div className="col-6 col-right">
              <div className="explore-img-item">
                {/* <img src={exploreImg2} alt="exploreImg 2" /> */}
                <Card src={exploreImg2}></Card>
              </div>
              <div className="explore-img-item">
                {/* <img src={exploreImg3} alt="exploreImg 3" /> */}
                <Card src={exploreImg3} sale={'sale'} tag={true}></Card>
              </div>
              <div className="explore-img-item">
                {/* <img src={exploreImg4} alt=" exploreImg 4" /> */}
                <Card src={exploreImg4}></Card>
              </div>
              <div className="explore-img-item">
                {/* <img src={exploreImg5} alt="exploreImg 5" /> */}
                <Card src={exploreImg5}></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExploreStyle>
  );
};

const ExploreStyle = styled.div`
  padding: 84px 0;
  background-color: #fff;
  .explore-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  .explore-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    padding-bottom: 60px;
  }
  .explore-images {
    position: relative;
    .explore-title {
      font-size: 30px;
      font-weight: 400;
      text-transform: uppercase;
      color: ${Color.textColor};
      transform: rotate(-90deg);
      position: absolute;
      top: 50%;
      left: -23%;
    }

    .row {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-column-gap: 20px;
      /* max-height: 600px; */
    }

    .col-left {
      width: 100%;
      cursor: pointer;
      img {
        width: 100%;
      }
    }

    .col-right {
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 20px;
      height: 600px;

      .explore-img-item {
        width: 100%;
        overflow: hidden;
        cursor: pointer;
        .explore-img-item img {
          width: 100%;
        }
      }
    }
  }

  // Mediaquery
  @media (max-width: 1200px) {
    .explore-wrapper {
      margin: 0 30px;
    }
    .explore-brand {
      padding-bottom: 40px;
    }
    .brand-img {
      max-width: 250px;
      img {
        width: 100%;
      }
    }
    .explore-images .explore-title {
      position: relative;
      top: -20px;
      left: 0;
      transform: rotate(0);
    }

    .col-6 .col-left {
      .cardBox {
        max-width: 548px;
      }
    }
    .explore-images .col-right {
      display: flex;
      flex-wrap: wrap;
    }
    .explore-images .col-right .explore-img-item {
      max-width: 228px;
    }

    .cardBox {
      width: 100%;
    }
    .explore-images .col-right {
      height: 100%;
    }
  }

  @media (max-width: 992px) {
    .explore-brand {
      flex-wrap: wrap;
    }

    .explore-images .row {
      display: flex;
      flex-wrap: wrap;
      /* max-height: max-content; */
      row-gap: 20px;
      justify-content: center;
    }

    .col-6 .col-right {
      justify-content: space-between;
    }
    .explore-images .col-right .explore-img-item {
      max-width: 294px;
    }
    .explore-images .col-right {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .explore-wrapper {
    }
  }

  @media (max-width: 576px) {
    .explore-wrapper {
      padding: 0 4px;
    }

    .explore-images .col-right {
      justify-content: center;
    }
    .explore-images .col-right {
    }
  }
`;
