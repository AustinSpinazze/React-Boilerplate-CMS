import React from 'react';

const Products = () => {
  const _hsq = (window.hsq = window.hsq || []);
  useEffect(() => {
    _hsq.push(['setPath', '/react-app/products']);
    _hsq.push(['trackPageView']);
  });
  return <>Products</>;
};

export default Products;
