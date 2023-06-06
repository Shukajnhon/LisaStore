import {Collection} from 'components/Collection';
import {Explore} from 'components/Explore';
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
    </div>
  );
};

export default Home;
