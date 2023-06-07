import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../assets/images/facebook-icon.svg';
import twitterIcon from '../assets/images/twitter-icon.svg';
import linkedIcon from '../assets/images/linkedin-icon.svg';
import instagramIcon from '../assets/images/instagram-icon.svg';
import paymentIcon from '../assets/images/payment-icon.svg';
import toTopIcon from '../assets/images/to-top-icon.svg';
import Color from 'Color/Color';

const Footer = () => {
  return (
    <FooterStyle className="footer">
      <div className="footer-top">
        <div className="footer-title">
          <span>Lisa</span>
          <div className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
          <div className="footer-social">
            <div className="facebook-icon">
              <img src={facebookIcon} alt="facebook-icon" />
            </div>
            <div className="twitter-icon">
              <img src={twitterIcon} alt="twitter-icon" />
            </div>
            <div className="linkedin-icon">
              <img src={linkedIcon} alt="linkedin-icon" />
            </div>
            <div className="instagram-icon">
              <img src={instagramIcon} alt="instagram-icon" />
            </div>
          </div>
        </div>

        <div className="footer-detail">
          <table className="table">
            <tr>
              <th>CATALOG</th>
              <th>ABOUT US</th>
              <th>CUSTOMER SERVICES</th>
            </tr>

            <tr>
              <td>Necklaces</td>
              <td>Our Producers</td>
              <td>Contact Us</td>
            </tr>

            <tr>
              <td>hoodies</td>
              <td>Sitemap</td>
              <td>Track Your Order</td>
            </tr>

            <tr>
              <td>Jewelry Box</td>
              <td>FAQ</td>
              <td>Product Care & Repair</td>
            </tr>

            <tr>
              <td>T-shirt</td>
              <td>About Us</td>
              <td>Book an Appointment</td>
            </tr>

            <tr>
              <td>jacket</td>
              <td>Terms & Conditions</td>
              <td>Shipping & Returns</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="copyright-wrap">
        <div className="copyright">
          <span className="copyright-text">© 2023 LISA , Inc.</span>
          <div className="copyright-payment">
            <img src={paymentIcon} alt="payment-icon" />
          </div>
          <div className="scroll-to-top">
            <span className="scroll-to-top-text">Scroll to top</span>
            <div className="scroll-to-top-icon">
              <img src={toTopIcon} alt="toTopIcon" />
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  padding-top: 100px;
  max-width: 1900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${Color.whiteColor};
  .footer-top {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    margin-bottom: 90px;
  }
  .footer-title {
    width: 30%;
  }

  .footer-title {
    span {
      margin-bottom: 40px;
      display: block;
      text-align: left;
      font-size: 28px;
      font-weight: 400;
    }
    .footer-text {
      font-size: 16px;
      font-weight: 400;
      text-align: justify;
      color: ${Color.textColor2};
      line-height: 22px;
      margin-bottom: 30px;
    }

    .footer-social {
      display: flex;
      justify-content: space-between;
      width: 60%;
    }
    .facebook-icon,
    .twitter-icon,
    .linkedin-icon,
    .instagram-icon {
      cursor: pointer;
    }
  }
  /* .footer-detail  */
  .footer-detail {
    width: 70%;
    display: flex;
  }
  .table {
    width: 100%;
  }
  table,
  th {
    font-size: 16px;
    color: ${Color.blackColor};
  }
  table,
  td {
    font-size: 14px;
    font-weight: 400;
    color: ${Color.textColor};
  }
  table,
  th,
  td {
    cursor: pointer;
  }

  /* copyright */
  .copyright-wrap {
    background-color: ${Color.blackColor};
  }
  .copyright {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .copyright-text,
    .scroll-to-top {
      font-size: 16px;
      font-weight: 400;
      color: ${Color.whiteColor};
    }
    .scroll-to-top {
      display: flex;
      cursor: pointer;
    }
    .scroll-to-top-text {
      margin-right: 4px;
    }
  }
`;
