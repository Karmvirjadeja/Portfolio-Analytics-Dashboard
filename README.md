# Portfolio Analytics Dashboard

This project is a Portfolio Analytics Dashboard that allows users to monitor their investment performance. It includes both a client-side application built with React and a server-side application built with Node.js and Express.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Client](#client)
- [Server](#server)
- [Folder Structure](#folder-structure)
- [Key Files](#key-files)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Overview

The Portfolio Analytics Dashboard provides users with various charts and metrics to analyze their investment portfolio. It includes features such as asset allocation, performance comparison, and key metrics.

## Features

- Dashboard with key metrics and charts
- Monthly sales data visualization
- Performance comparison of different strategies
- Asset allocation visualization
- Investment data visualization
- User authentication and authorization

## Technologies

### Client

- React
- Material-UI
- Nivo (for data visualization)
- Recharts (for data visualization)
- Redux (for state management)
- React Router (for routing)

### Server

- Node.js
- Express
- MongoDB (with Mongoose)
- JWT (for authentication)
- dotenv (for environment variables)

## Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/portfolio-analytics-dashboard.git
   cd portfolio-analytics-dashboard
   ```

2. Install dependencies for the client and server:

   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables:

   ```sh
   VITE_APP_BASE_URL="http://localhost:5001"
   MONGO_URL="YOUR_MONGODB_URL"
   PORT=5001
   ```

   Replace `YOUR_MONGODB_URL` with your actual MongoDB URL.

**Note:** Ensure that the `.env` file is included in `.gitignore` to prevent accidental exposure of sensitive data.

### Running the Application

1. Start the server:
   
   ```sh
   cd server
   npm run dev
   ```

2. Start the client:
   
   ```sh
   cd client
   npm run dev
   ```

The client application will be available at [http://localhost:5173](http://localhost:5173) and the server will run on [http://localhost:5001](http://localhost:5001).

## Client

The client-side application is built with React and Material-UI. It includes various components and pages to display the portfolio analytics.

## Server

The server-side application is built with Node.js and Express, using MongoDB for data storage and JWT for authentication.

## Folder Structure

```
client/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── ... (images, icons, etc.)
│   ├── components/
│   │   ├── AssetAllocationChart.jsx
│   │   ├── BreakdownChart.jsx
│   │   ├── FlexBetween.jsx
│   │   ├── Header.jsx
│   │   ├── InvestmentBarChart.jsx
│   │   ├── KeyMetricsCard.jsx
│   │   ├── OverviewChart.jsx
│   │   ├── StatBox.jsx
│   │   ├── StrategyPerformanceTable.jsx
│   │   └── ...
│   ├── scenes/
│   │   ├── Dashboard.jsx
│   │   ├── Monthly.jsx
│   │   ├── Comparison.jsx
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── theme.js
├── .env
├── package.json
└── ...

server/
├── config/
│   └── db.js
├── controllers/
│   └── dataController.js
├── models/
│   ├── transactionModel.js
│   ├── salesStatsModel.js
│   ├── monthlySalesModel.js
│   ├── strategyPerformanceModel.js
│   ├── investmentModel.js
│   ├── assetAllocationModel.js
│   └── keyMetricsModel.js
├── routes/
│   └── dataRoutes.js
├── middleware/
│   └── authMiddleware.js
├── utils/
│   └── errorHandler.js
├── .env
├── server.js
├── package.json
└── README.md
```

## Key Files

- `db.js`: Database connection logic.
- `dataController.js`: Contains all the GET request handlers for fetching data from the database.
- `dataRoutes.js`: Defines the routes that map to the controller functions.
- `authMiddleware.js`: Middleware for authentication.
- `errorHandler.js`: Custom error handler.

## API Endpoints

### Transactions
- `GET /api/transactions`: Get all transactions

### Sales Statistics
- `GET /api/sales-stats`: Get sales statistics

### Monthly Sales
- `GET /api/monthly-sales`: Get all monthly sales

### Strategy Performance
- `GET /api/strategy-performance`: Get all strategy performances

### Investments
- `GET /api/investments`: Get all investments

### Asset Allocations
- `GET /api/asset-allocations`: Get all asset allocations

### Key Metrics
- `GET /api/key-metrics`: Get key metrics

## License

This project is licensed under the [MIT License](LICENSE).
