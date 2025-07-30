# Shopping Site Server

This is the backend server for the Shopping Site project. It provides RESTful APIs for product, cart, and order management, and connects to a database for persistent storage.

## File Structure (Detailed)

```
Server/
  .env                  # Environment variables for database and server config
  .gitignore            # Git ignore rules
  package.json          # Node.js dependencies and scripts
  package-lock.json     # Dependency lock file
  README.md             # Project documentation
  server.js             # Main server entry point
  seeder.js             # Script to seed the database with initial data
  server.md             # Additional server documentation
  config/
    db.js               # Database connection logic
  controllers/
    productController.js# Controller for product-related logic
  data/
    products.js         # Seed data for products
  models/
    Cart.js             # Mongoose model for Cart
    cartController.js   # Cart controller logic (may be misplaced, consider moving to controllers/)
    Product.js          # Mongoose model for Product
  routes/
    cartRoutes.js       # Express routes for cart operations
    productRoutes.js    # Express routes for product operations
  node_modules/         # Installed Node.js dependencies
```

- `config/`: Database connection and configuration files.
- `controllers/`: Business logic for handling API requests.
- `data/`: Seed data for populating the database.
- `models/`: Mongoose models for MongoDB collections.
- `routes/`: Express route definitions for API endpoints.
- `server.js`: Main entry point for starting the Express server.
- `seeder.js`: Script to seed the database with initial data.
- `.env`: Environment variables (not committed to version control).

---

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up your environment variables in a `.env` file (see `.env.example` if available).
3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
- `/api/products` - Product listing and details
- `/api/cart` - Cart management
- (Add more as implemented)

## Notes
- Uses Express.js and Mongoose for API and database operations.
- Make sure MongoDB is running and accessible as per your `.env` configuration.

---
For more details, see comments in each file and the `server.md` for additional documentation.
