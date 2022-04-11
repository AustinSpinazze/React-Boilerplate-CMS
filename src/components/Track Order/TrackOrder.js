import React from 'react';

const TrackOrder = () => {
  const _hsq = (window.hsq = window.hsq || []);
  useEffect(() => {
    _hsq.push(['setPath', '/react-app/track-order']);
    _hsq.push(['trackPageView']);
  });
  return <>TrackOrder</>;
};

export default TrackOrder;
