const mongoose = require("mongoose");

const investmentSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Investment = mongoose.model("Investment", investmentSchema);

module.exports = Investment;
