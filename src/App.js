import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

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

function App({ moduleData }) {
  return (
    <RecoilRoot>
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
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
