import React, { useEffect } from 'react';

const Return = () => {
  const _hsq = (window.hsq = window.hsq || []);
  useEffect(() => {
    _hsq.push(['setPath', '/react-app/return']);
    _hsq.push(['trackPageView']);
  });
  return <>Return</>;
};

export default Return;
