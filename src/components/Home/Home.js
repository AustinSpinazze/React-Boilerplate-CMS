import React from 'react';

import Banner from '../../images/LogoBanner.png';
import './_home.scss';

const Home = () => {
  return (
    <main className="home-container">
      <section className="banner">
        <img
          className="banner-logo"
          src={Banner}
          alt="Outer Rim Supply Co. Banner"
        />
      </section>
      <section></section>
    </main>
  );
};

export default Home;
