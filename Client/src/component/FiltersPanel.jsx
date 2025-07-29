import React from 'react';
import './FiltersPanel.css';

const subCategories = ["Casual Shirts", "Sweatshirts", "Jumpers", "Jackets", "T-Shirts", "Hoodies & Sweatshirts"];
const colors = [{name: 'Black', hex: '#000'}, {name: 'Blue', hex: '#0000FF'}, {name: 'White', hex: '#FFFFFF'}, {name: 'Brown', hex: '#964B00'}, {name: 'Red', hex: '#FF0000'}];

const FiltersPanel = ({ filters, onFilterChange }) => {
  
  const handleSubCategoryClick = (subCategory) => {
    // If clicking the same one, toggle it off. Otherwise, set it.
    const newValue = filters.subCategory === subCategory ? null : subCategory;
    onFilterChange('subCategory', newValue);
  };
  
  const handleColorClick = (colorName) => {
    const newValue = filters.color === colorName ? null : colorName;
    onFilterChange('color', newValue);
  };

  return (
    <aside className="filters-panel">
      <div className="filter-group sort-by-group">
        <label htmlFor="sort-by">Sort By</label>
        <select
          id="sort-by"
          className="sort-by-select"
          value={filters.sortBy}
          onChange={(e) => onFilterChange('sortBy', e.target.value)}
        >
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
          {subCategories.map(subCat => (
            <li key={subCat}>
              <button 
                onClick={() => handleSubCategoryClick(subCat)}
                className={`filter-button ${filters.subCategory === subCat ? 'active' : ''}`}
              >
                {subCat}
              </button>
            </li>
          ))}
        </ul>
      </details>

      <details className="filter-group" open>
        <summary>Colour</summary>
        <ul className="filter-color-list">
          {colors.map(color => (
            <li key={color.name}>
              <button
                className={`color-swatch ${filters.color === color.name ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                aria-label={color.name}
                onClick={() => handleColorClick(color.name)}
              ></button>
            </li>
          ))}
        </ul>
      </details>
      <details className="filter-group" open>
        <summary>Colour</summary>
        <ul className="filter-color-list">
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
