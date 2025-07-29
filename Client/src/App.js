// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/layout/Header';
import HomePage from './pages/HomePage';
import Footer from './component/layout/Footer'; // <-- Import
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage'; // <-- Import if you have a ProductDetailsPage


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/men/clothing/all" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;