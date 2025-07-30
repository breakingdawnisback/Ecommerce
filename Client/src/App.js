// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/layout/Header';
import HomePage from './pages/HomePage';
import Footer from './component/layout/Footer'; // <-- Import
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage'; // <-- Import if you have a ProductDetailsPage
import CartPage from './pages/CartPage'; // <-- Import if you have a CartPage
import AddToBagModal from './component/common/AddToBagModal';
import CartContext from './Context/CartContext';
function App() {
  const { cart,isModalOpen, closeModal, addedItem} = React.useContext(CartContext);

  const totalItems= cart?cart.items.reduce((acc, item) => acc + item.quantity, 0): 0;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/men/clothing/all" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <AddToBagModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        item={addedItem}
        totalItems={totalItems}
      />
    </div>
  );
}

export default App;