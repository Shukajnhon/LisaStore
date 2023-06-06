import {Collection} from 'components/Collection';
import {Explore} from 'components/Explore';
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <Collection></Collection>
      <div className="explore-section">
        <Explore></Explore>
      </div>
    </div>
  );
};

export default Home;
