const User = require("../models/User");

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

exports.login = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "User not found" });
  res.json(user); // We'll return token later
};
