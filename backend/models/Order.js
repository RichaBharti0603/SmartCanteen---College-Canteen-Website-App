const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      quantity: Number
    }
  ],
  total: Number,
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
