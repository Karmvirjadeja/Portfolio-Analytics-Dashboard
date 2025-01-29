const express = require("express");
const {
  getTransactions,
  getSalesStats,
  getMonthlySales,
  getStrategyPerformances,
  getInvestments,
  getAssetAllocations,
  getKeyMetrics,
} = require("../controllers/dataController");

const router = express.Router();

router.get("/transactions", getTransactions);
router.get("/strategy-performance", getStrategyPerformances);
router.get("/investments", getInvestments);
router.get("/asset-allocations", getAssetAllocations);
router.get("/key-metrics", getKeyMetrics);

module.exports = router;
