import React, { useEffect } from 'react';

const ContactUs = () => {
  let temp = 100;

  useEffect(() => {
    console.log('Fired contact useEffect');
  }, []);

  console.log('Fired contact render');

  return (
    <>
      <h1>ContactUs</h1>
      <p>{temp}</p>
    </>
  );
};

export default ContactUs;
