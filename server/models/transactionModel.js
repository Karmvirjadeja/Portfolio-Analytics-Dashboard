const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    products: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
