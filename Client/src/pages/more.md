Absolutely! The backend API is running and ready to serve data. Let's build the frontend components to consume and display it, bringing the Category Page to life.

This is where our component-based architecture truly shines. We'll create a dedicated component for the filters and another for the product grid, keeping our `CategoryPage` clean and organized.

---

### **Phase 3 (Continued): Building the `FiltersPanel` and `ProductGrid`**

#### **Step 1: Install Axios and Fetch Products**

First, we need a way to make HTTP requests from our React app to our backend. Axios is the perfect tool for this.

1.  **Install Axios:** In your terminal, inside the `/client` directory, run:

    ```bash
    npm install axios
    ```

2.  **Fetch Data in `CategoryPage.jsx`**: We'll use the `useEffect` hook to fetch products when the component mounts and `useState` to store them.

    Update `src/pages/CategoryPage.jsx`:

    ```jsx
    // src/pages/CategoryPage.jsx
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import './CategoryPage.css';
    // We will create these components in the next steps
    import FiltersPanel from '../components/FiltersPanel';
    import ProductGrid from '../components/ProductGrid';

    const CategoryPage = () => {
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchProducts = async () => {
          try {
            // Fetch data from our backend API
            const { data } = await axios.get('http://localhost:5000/api/products');
            setProducts(data);
            setLoading(false);
          } catch (err) {
            setError('Failed to load products. Please try again later.');
            setLoading(false);
          }
        };

        fetchProducts();
      }, []); // Empty dependency array means this runs once on component mount

      return (
        <div className="category-page">
          <div className="page-header">
            <div className="breadcrumbs">
              <a href="/">Home</a> / <a href="/men">Men</a> / <span>Clothing</span>
            </div>
            <h1>Men's Clothing</h1>
            <p className="category-description">
              From casual essentials to refined formalwear, Ralph Lauren’s men’s clothing has a sense of timelessness and uncompromising quality.
            </p>
          </div>
          <div className="main-content">
            <FiltersPanel />
            {loading ? (
              <div>Loading products...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        </div>
      );
    };

    export default CategoryPage;
    ```

#### **Step 2: Build the `FiltersPanel` Component**

This component will display all the filtering and sorting options. For now, it will be a static UI component. We'll add the interactive logic later.

1.  Create `src/components/FiltersPanel.jsx`:

    ```jsx
    // src/components/FiltersPanel.jsx
    import React from 'react';
    import './FiltersPanel.css';

    const FiltersPanel = () => {
      return (
        <aside className="filters-panel">
          <div className="filter-group sort-by-group">
            <label htmlFor="sort-by">Sort By</label>
            <select id="sort-by" className="sort-by-select">
              <option value="default">Default</option>
              <option value="new-arrivals">New Arrivals</option>
              <option value="best-sellers">Best Sellers</option>
              <option value="price-low-high">Price Low to High</option>
              <option value="price-high-low">Price High to Low</option>
            </select>
          </div>

          <details className="filter-group" open>
            <summary>Category</summary>
            <ul>
              <li><a href="#">Casual Shirts <span>(159)</span></a></li>
              <li><a href="#">Sweatshirts <span>(75)</span></a></li>
              <li><a href="#">Jumpers <span>(79)</span></a></li>
              <li><a href="#">Jackets <span>(72)</span></a></li>
              {/* Add more categories as needed */}
            </ul>
          </details>

          <details className="filter-group" open>
            <summary>Size</summary>
            <ul className="filter-size-list">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <li key={size}><button>{size}</button></li>
              ))}
            </ul>
          </details>
          
          <details className="filter-group" open>
            <summary>Colour</summary>
            <ul className="filter-color-list">
                {/* Add color swatches here */}
                <li><button className="color-swatch" style={{backgroundColor: '#000'}} aria-label="Black"></button></li>
                <li><button className="color-swatch" style={{backgroundColor: '#0000FF'}} aria-label="Blue"></button></li>
                <li><button className="color-swatch" style={{backgroundColor: '#FFFDD0'}} aria-label="Cream"></button></li>
                <li><button className="color-swatch" style={{backgroundColor: '#964B00'}} aria-label="Brown"></button></li>
            </ul>
          </details>
        </aside>
      );
    };

    export default FiltersPanel;
    ```

2.  Create `src/components/FiltersPanel.css`:

    ```css
    /* src/components/FiltersPanel.css */
    .filters-panel {
      border-right: 1px solid #e0e0e0;
      padding-right: 2rem;
    }

    .filter-group {
      padding: 1.5rem 0;
      border-bottom: 1px solid #e0e0e0;
    }

    .filter-group summary {
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
      list-style: none; /* Remove default marker */
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .filter-group summary::after {
      content: '−'; /* Minus sign for open */
      font-size: 1.5rem;
      font-weight: 300;
    }

    details:not([open]) > summary::after {
      content: '+'; /* Plus sign for closed */
    }

    .filter-group ul {
      margin-top: 1rem;
    }

    .filter-group ul li a {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      font-size: 0.9rem;
      color: var(--color-grey);
    }
    .filter-group ul li a:hover {
      color: var(--color-navy);
    }
    
    .sort-by-group label {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1rem;
        display: block;
        margin-bottom: 1rem;
    }

    .sort-by-select {
        width: 100%;
        padding: 0.75rem;
        font-size: 0.9rem;
        border: 1px solid var(--color-grey);
    }

    .filter-size-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
    .filter-size-list button {
        border: 1px solid #e0e0e0;
        width: 100%;
        padding: 0.5rem;
        text-align: center;
    }
    .filter-size-list button:hover {
        border-color: var(--color-navy);
    }
    
    .filter-color-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
    }

    .color-swatch {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid #e0e0e0;
    }

    @media (max-width: 960px) {
      .filters-panel {
        display: none; /* We will handle mobile filters with a popup later */
      }
    }
    ```

#### **Step 3: Build the `ProductGrid` Component**

This component receives the list of products and maps them to `ProductCard` components.

1.  Create `src/components/ProductGrid.jsx`:

    ```jsx
    // src/components/ProductGrid.jsx
    import React from 'react';
    import ProductCard from './ProductCard';
    import './ProductGrid.css';

    const ProductGrid = ({ products }) => {
      return (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      );
    };

    export default ProductGrid;
    ```

2.  Create `src/components/ProductGrid.css`:

    ```css
    /* src/components/ProductGrid.css */
    .product-grid {
      display: grid;
      /* Creates a responsive grid that fits as many columns as possible */
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem 1.5rem;
    }
    ```

3.  **Small Update to `ProductCard.jsx`**: We need to make sure our `ProductCard` is using the data fields from our API correctly (e.g., `_id`, `price`). We also need to format the price.

    ```jsx
    // src/components/ProductCard.jsx
    import React from 'react';
    import './ProductCard.css';
    import { HeartIcon } from './common/Icons';

    const ProductCard = ({ product }) => {
      // Simple price formatter
      const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
      }).format(product.price);

      return (
        <div className="product-card">
          <div className="product-image-container">
            <a href={`/product/${product._id}`}> {/* Make link dynamic */}
              <img src={product.images[0]} alt={product.name} className="product-image primary" />
              {/* Ensure there is a second image before trying to render it */}
              {product.images[1] && <img src={product.images[1]} alt={product.name} className="product-image secondary" />}
            </a>
            <button className="wishlist-button"><HeartIcon /></button>
            <div className="quick-shop-overlay">
              <button className="quick-shop-button">Quick shop</button>
            </div>
          </div>
          <div className="product-details">
            <h3 className="product-name"><a href={`/product/${product._id}`}>{product.name}</a></h3>
            <p className="product-price">{formattedPrice}</p> {/* Use formatted price */}
            {product.colorsAvailable && (
              <div className="product-colors">
                {product.colorsAvailable} {product.colorsAvailable > 1 ? 'colors' : 'color'} available
              </div>
            )}
          </div>
        </div>
      );
    };

    export default ProductCard;
    ```

Now, navigate to `/men/clothing` in your browser. You should see a fully populated Category Page with a filter panel on the left and a grid of products fetched directly from your Node.js server!

### Summary & Next Steps

We have successfully:
1.  Set up the basic Node.js, Express, and MongoDB backend structure.
2.  Created a Product model and seeded the database with sample data.
3.  Built a `/api/products` endpoint to serve the data.
4.  Installed React Router and set up routing for the Category Page.
5.  Built the UI for the `FiltersPanel` and `ProductGrid`.
6.  Fetched the product data from our API and displayed it dynamically in the grid.

The next logical step is to make the filters and sorting functional. This will involve:
*   Updating the backend API to accept query parameters (e.g., `/api/products?sort=price-low-high&size=M`).
*   Adding state management to the `CategoryPage` to keep track of selected filters.
*   Making the `FiltersPanel` interactive to update that state and re-fetch data.

Shall we proceed with making the sorting functional first?