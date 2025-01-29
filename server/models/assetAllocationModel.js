const mongoose = require("mongoose");

const assetAllocationSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AssetAllocation = mongoose.model(
  "AssetAllocation",
  assetAllocationSchema
);

module.exports = AssetAllocation;
