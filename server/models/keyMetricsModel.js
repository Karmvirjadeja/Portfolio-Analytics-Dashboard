const mongoose = require("mongoose");

const keyMetricsSchema = mongoose.Schema(
  {
    totalPortfolioValue: {
      type: Number,
      required: true,
    },
    dailyPNL: {
      type: Number,
      required: true,
    },
    winRate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const KeyMetrics = mongoose.model("KeyMetrics", keyMetricsSchema);

module.exports = KeyMetrics;
