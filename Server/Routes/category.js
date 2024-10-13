const express = require('express');
const Category = require('../Models/Category'); // Path to your Category model
const router = express.Router();

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find().populate('parentCategory');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

router.post('/create-category', async (req, res) => {
  const { name, description, parentCategory, image } = req.body;

  try {
    // Create a new category
    const newCategory = new Category({
      name,
      description,
      parentCategory: parentCategory || null, // Allow null for top-level categories
      image
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Unable to create category', error });
  }
});

module.exports = router;
