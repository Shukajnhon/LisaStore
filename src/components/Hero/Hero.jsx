import {Button} from 'components/Button';
import React from 'react';
import styled from 'styled-components';
import zaraLogo from '../../assets/images/hero-zara-logo.svg';
import heroBackground from '../../assets/images/hero-img.svg';
import Color from 'Color/Color';

export const Hero = () => {
  return (
    <HeroStyle className="hero">
      <div className="hero-wrap">
        <div className="hero-title">
          <div className="hero-title-logo">
            <img src={zaraLogo} alt="zara logo" />
          </div>
        </div>
        <div className="hero-des">
          <span>
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </span>
        </div>
        <div className="hero-btn">
          <Button
            label="see collection"
            bgColor={Color.whiteColor}
            textColor={Color.textColor}
            width="198px"
            height="62px"
          ></Button>
        </div>
      </div>
    </HeroStyle>
  );
};

const HeroStyle = styled.div`
  max-width: 1920px;
  background-image: url(${heroBackground});
  height: 776px;
  background-position: right;
  position: relative;

  .hero-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 48px;
    width: 26%;

    .hero-des {
      color: ${Color.primaryColor};
      text-align: left;
    }

    .hero-btn {
      button {
        font-size: 20px;
        text-transform: capitalize;
      }
    }
    .hero-btn:hover button {
      background-color: ${Color.primaryColor};
      color: ${Color.whiteColor};
    }
  }
`;
