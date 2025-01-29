const Transaction = require("../models/transactionModel");

const StrategyPerformance = require("../models/strategyPerformanceModel");
const Investment = require("../models/investmentModel");
const AssetAllocation = require("../models/assetAllocationModel");
const KeyMetrics = require("../models/keyMetricsModel");

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Public
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get sales statistics
// @route   GET /api/sales-stats
// @access  Public

// @desc    Get all strategy performances
// @route   GET /api/strategy-performance
// @access  Public
const getStrategyPerformances = async (req, res) => {
  try {
    const strategyPerformances = await StrategyPerformance.find();
    res.json(strategyPerformances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all investments
// @route   GET /api/investments
// @access  Public
const getInvestments = async (req, res) => {
  try {
    const investments = await Investment.find();
    res.json(investments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all asset allocations
// @route   GET /api/asset-allocations
// @access  Public
const getAssetAllocations = async (req, res) => {
  try {
    const assetAllocations = await AssetAllocation.find();
    res.json(assetAllocations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get key metrics
// @route   GET /api/key-metrics
// @access  Public
const getKeyMetrics = async (req, res) => {
  try {
    const keyMetrics = await KeyMetrics.find();
    res.json(keyMetrics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTransactions,

  getStrategyPerformances,
  getInvestments,
  getAssetAllocations,
  getKeyMetrics,
};
