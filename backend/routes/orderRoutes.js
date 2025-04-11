const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const {
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

router.get("/", protect, getUserOrders);
router.get("/all", protect, adminOnly, getAllOrders); // ADMIN ONLY
router.patch("/:id", protect, adminOnly, updateOrderStatus); // ADMIN ONLY

module.exports = router;

