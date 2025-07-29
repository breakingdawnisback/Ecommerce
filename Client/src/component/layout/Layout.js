// src/components/layout/Layout.js
import React from 'react';
import Header from './Header';
// import Footer from './Footer'; // Uncomment when Footer is implemented

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
