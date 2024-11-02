const express = require('express');
const Product = require('../Models/Product'); // Path to your Product model
const router = express.Router();
const Category = require('../Models/Category');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'media/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB size limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|webp/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Only images are allowed (jpeg, jpg, png, webp)');
        }
    },
});

// GET all products
router.get('/', async (req, res) => {
    try {
        // Find all products and populate the 'category' field
        const products = await Product.find().populate('category', 'name'); // Only populate the 'name' field of the category

        if (!products.length) {
            return res.status(404).json({ message: 'No products found' });
        }

        res.json(products); // Send the structured products response
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

// GET products by category
router.get('/category/:categoryId', async (req, res) => {
    const categoryId = req.params.categoryId;

    try {
        // Find the category by ID
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Check if it's a parent category (i.e., parentCategory is null)
        if (!category.parentCategory) {
            // If it's a parent category, find all child categories
            const childCategories = await Category.find({ parentCategory: categoryId }).select('_id');

            // Collect all category IDs (parent + all child categories)
            const categoryIds = [categoryId, ...childCategories.map(cat => cat._id)];

            // Find products belonging to either parent or child categories
            const products = await Product.find({ category: { $in: categoryIds } }).populate('category');

            return res.json(products);
        } else {
            // If it's a child category, find only products for that category
            const products = await Product.find({ category: categoryId }).populate('category');

            return res.json(products);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

// POST a new product with multiple images upload
router.post('/add-product', upload.array('images', 5), async (req, res) => { // Limiting to 5 images
    const { name, description, price, discountedPrice, category, brand, stock, rating, numReviews } = req.body;
    const images = req.files ? req.files.map(file => ({
        url: `/media/${file.filename}`,
        alt: file.filename,
    })) : [];

    try {
        const newProduct = new Product({
            name,
            description,
            price,
            discountedPrice,
            category,
            brand,
            stock,
            images,
            rating,
            numReviews,
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error saving product:', error); // This will give more insight
        res.status(500).json({ message: 'Unable to create product', error });
    }
});


module.exports = router;
