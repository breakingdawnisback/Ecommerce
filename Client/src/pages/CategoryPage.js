// src/pages/CategoryPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoryPage.css';
import FiltersPanel from '../component/FiltersPanel';
import ProductGrid from '../component/ProductGrid';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Create a single state object for all filters
  const [filters, setFilters] = useState({
    sortBy: 'default',
    subCategory: null,
    color: null,
    // size: null, // We can add this later
  });

  // 2. This effect now runs whenever the 'filters' object changes
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // 3. Build the query string from the filters object
        const params = new URLSearchParams();
        if (filters.sortBy && filters.sortBy !== 'default') {
          params.append('sortBy', filters.sortBy);
        }
        if (filters.subCategory) {
          params.append('subCategory', filters.subCategory);
        }
        if (filters.color) {
          params.append('color', filters.color);
        }

        const { data } = await axios.get(`http://localhost:5000/api/products?${params.toString()}`);
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]); // Dependency array now watches the entire filters object

  // 4. Create a single handler to update any filter
  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <div className="category-page">
      <div className="page-header">{/* ... */}</div>
      <div className="main-content">
        {/* 5. Pass the state and handler to the FiltersPanel */}
        <FiltersPanel
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <div className="product-listing-area">
          {loading ? (
            <div>Loading products...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;