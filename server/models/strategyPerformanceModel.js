const mongoose = require("mongoose");

const strategyPerformanceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    data: [
      {
        x: {
          type: String,
          required: true,
        },
        y: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const StrategyPerformance = mongoose.model(
  "StrategyPerformance",
  strategyPerformanceSchema
);

module.exports = StrategyPerformance;
