# Shopping Site Client

## File Structure (Detailed)

```
Client/
  package.json
  README.md
  public/
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    main.jsx
    reportWebVitals.js
    setupTests.js
    app/                   # (empty or app-specific logic)
    assets/
      .keep
      fonts/
        .keep
      images/
        .keep
    cart/
      CartItem.css
      CartItems.js
      OrderSummary.css
      OrderSummary.js
    component/
      FiftyFiftySection.css
      FiftyFiftySection.js
      FiltersPanel.css
      FiltersPanel.jsx
      FullWidthBanner.css
      FullWidthBanner.js
      Hero.css
      Hero.js
      layout/
        Footer.css
        Footer.js
        Header.css
        Header.jsx
        Layout.js
        MegaMenu.css
        MegaMenu.js
        menuData.js
        Navbar.css
        Navbar.jsx
        TopBanner.css
        TopBanner.jsx
        UtilityNav.css
        UtilityNav.jsx
      common/
        AddToBagModal.css
        AddToBagModal.js
        Icons.jsx
      productDetail/
        ProductGallery.css
        ProductGallery.js
        ProductInfo.css
        ProductInfo.js
      products/
        polo-shirt-products.js
        ProductCard.css
        ProductCard.js
        SubCategoryNav.css
        SubCategoryNav.js
    Context/
      CartContext.js
    pages/
      CartPage.css
      CartPage.js
      CategoryPage.css
      CategoryPage.js
      HomePage.jsx
      more.md
      ProductDetailPage.css
      ProductDetailPage.js
    styles/
      global.css
      GlobalStyles.js
```

- `public/`: Static assets for the React app.
- `src/`: Main source code for the React frontend.
  - `component/`: UI components, organized by feature (layout, product, common, etc).
  - `cart/`: Cart-related UI and logic.
  - `Context/`: React context for global state (e.g., cart context).
  - `pages/`: Top-level pages/routes for the app.
  - `assets/`: Fonts and images (currently placeholders).
  - `styles/`: Global styles and style helpers.

---

This project is a React-based frontend for an e-commerce site. Below is a guide to the main structure and where key features are implemented:

## Main Features & File Locations

- **Header & Navbar**
  - File: `src/component/layout/Header.js`
  - File: `src/component/layout/Navbar.js`
  - Styles: `src/component/layout/Header.css`, `src/component/layout/Navbar.css`
  - Description: The header contains the logo, search bar, icons (wishlist, account, cart), and a multi-row navbar for category links.

- **Homepage Sections**
  - File: `src/component/home/HomeSections.js`, `src/component/home/HeroSlider.js`
  - Styles: `src/component/home/HomeSections.css`, `src/component/home/HeroSlider.css`
  - Description: These files handle the homepage hero slider and featured sections.

- **Pages**
  - File: `src/pages/HomePage.js`
  - Description: Main landing page, imports header, navbar, and homepage sections.

- **App Entry Point**
  - File: `src/App.js`, `src/index.js`
  - Description: Main React app and root rendering logic.

- **Public Assets**
  - Folder: `public/`
  - Description: Contains favicon, logo images, manifest, and other static assets.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

## Customization
- To change the background image, update the CSS in `Header.css` and place your image in the `public/` folder.
- To edit navigation links or categories, modify the data structure in `Navbar.js`.

## Notes
- All UI layout and styling is handled in the respective CSS files.
- The header and navbar are designed to be responsive and visually similar to modern e-commerce sites.

---
For further details, see comments in each file for specific logic and structure.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Updates

- README last updated to ensure documentation is present and up to date for both Client and Server (see Server/README.md for backend details).
