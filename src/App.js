import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Navbar,
  Footer,
  Home,
  About,
  Products,
  ContactUs,
  TrackOrder,
  Return,
  Legal,
} from './components/index';
import styles from './_app.scss';

function App({ moduleData }) {
  return (
    <>
      <div className={styles.main_container}>
        <Navbar />
        <Routes>
          <Route path="/react-app" element={<Home />} />
          <Route path="/react-app/about" element={<About />} />
          <Route path="/react-app/products" element={<Products />} />
          <Route path="/react-app/contact-us" element={<ContactUs />} />
          <Route path="/react-app/track-order" element={<TrackOrder />} />
          <Route path="/react-app/return" element={<Return />} />
          <Route path="/react-app/legal" element={<Legal />} />
          <Route
            path="/react-app/*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
