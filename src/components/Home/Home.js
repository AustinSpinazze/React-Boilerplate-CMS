import React, { useEffect } from 'react';

import Banner from '../../images/LogoBanner.png';
import './_home.scss';

const Home = () => {
  const _hsq = (window.hsq = window.hsq || []);
  useEffect(() => {
    _hsq.push(['setPath', '/react-app']);
    _hsq.push(['trackPageView']);
  }, []);

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
