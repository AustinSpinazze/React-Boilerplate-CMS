import React, { useEffect } from 'react';

const About = () => {
  const _hsq = (window.hsq = window.hsq || []);
  useEffect(() => {
    _hsq.push(['setPath', '/react-app/about']);
    _hsq.push(['trackPageView']);
  });

  return <>About</>;
};

export default About;
