const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { userId, items, total } = req.body;
  const newOrder = await Order.create({ userId, items, total });
  res.json(newOrder);
};
