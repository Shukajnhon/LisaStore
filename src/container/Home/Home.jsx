import {BestSeller} from 'components/BestSeller';
import {Collection} from 'components/Collection';
import {Explore} from 'components/Explore';
import {Follow} from 'components/Follow';
import {Hero} from 'components/Hero';
import {Products} from 'components/Products';
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <Collection></Collection>
      <div className="explore-section">
        <Explore></Explore>
      </div>

      <div className="products-section">
        <Products></Products>
      </div>

      <div className="hero-section">
        <Hero></Hero>
      </div>

      <div className="best-seller-section">
        <BestSeller></BestSeller>
      </div>

      <div className="follow-section">
        <Follow></Follow>
      </div>
    </div>
  );
};

export default Home;
