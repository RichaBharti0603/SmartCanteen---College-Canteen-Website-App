const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new menu item
router.post('/', async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    const newItem = new MenuItem({ name, description, price, image });
    await newItem.save();

    res.status(201).json({ message: 'Menu item added' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update menu item
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    await MenuItem.findByIdAndUpdate(req.params.id, {
      name, description, price, image
    });
    res.status(200).json({ message: 'Menu item updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete menu item
router.delete('/:id', async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Menu item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

