const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  available: { type: Boolean, default: true },
  category: String
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
