# Shopping Site Project Structure

This project is organized into two main parts: `Client` (frontend) and `Server` (backend).

## Folder Structure

```
shoping-site/
├── Client/
│   └── src/
│       ├── component/
│       │   ├── FiftyFiftySection.js
│       │   ├── FiftyFiftySection.css
│       │   ├── FullWidthBanner.js
│       │   ├── FullWidthBanner.css
│       │   ├── Hero.js
│       │   ├── Hero.css
│       │   ├── ProductGrid.jsx
│       │   ├── ProductGrid.css
│       │   ├── FiltersPanel.jsx
│       │   ├── FiltersPanel.css
│       │   ├── layout/
│       │   │   ├── Footer.js
│       │   │   ├── Footer.css
│       │   │   ├── MegaMenu.js
│       │   │   ├── MegaMenu.css
│       │   │   ├── Navbar.jsx
│       │   │   ├── Navbar.css
│       │   │   └── menuData.js
│       │   ├── productDetail/
│       │   │   ├── ProductInfo.js
│       │   │   ├── ProductInfo.css
│       │   │   ├── ProductGallery.js
│       │   │   └── ProductGallery.css
│       │   └── products/
│       │       ├── ProductCard.js
│       │       ├── ProductCard.css
│       │       ├── SubCategoryNav.js
│       │       ├── SubCategoryNav.css
│       │       └── polo-shirt-products.js
│       ├── pages/
│       │   ├── CategoryPage.js
│       │   ├── CategoryPage.css
│       │   ├── ProductDetailPage.js
│       │   ├── ProductDetailPage.css
│       │   ├── HomePage.jsx
│       │   └── more.md
│       ├── App.js
│       └── index.js
├── Server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── productController.js
│   ├── data/
│   │   └── products.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── seeder.js
│   ├── server.js
│   └── server.md
└── README.md
```

- `Client/` contains the React frontend source code.
- `Server/` contains the Node.js/Express backend source code.

This structure helps keep frontend and backend code organized and maintainable.