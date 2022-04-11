import React, { useEffect } from 'react';

const Legal = () => {
  const _hsq = (window.hsq = window.hsq || []);
  useEffect(() => {
    _hsq.push(['setPath', '/react-app/legal']);
    _hsq.push(['trackPageView']);
  });
  return <>Legal</>;
};

export default Legal;
