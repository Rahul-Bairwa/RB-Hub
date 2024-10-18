const multer = require('multer');
const path = require('path');
const express = require('express');
const Product = require('../Models/Product'); // Path to your Product model
const router = express.Router();
const Category = require('../Models/Category');
// GET all products
router.get('/', async (req, res) => {
    try {
      // Find all products and populate the 'category' field
      const products = await Product.find().populate('category','name'); // Only populate the 'name' field of the category
  
      if (!products.length) {
        return res.status(404).json({ message: 'No products found' });
      }
  
      // Structure the response to include product details along with category names
      const structuredProducts = products.map(product => {
       return product
      });
  
      res.json(structuredProducts); // Send the structured products response
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  });

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
            console.log("childcategory",childCategories)

            // Collect all category IDs (parent + all child categories)
            const categoryIds = [categoryId, ...childCategories.map(cat => cat._id)];
             console.log("all category ids",categoryIds)
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


// POST a new product
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'media/'); // Directory to save images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Naming the file with a timestamp to avoid overwriting
    }
});

// File filter to accept only image files
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'|| file.mimetype === 'image/webp') {
        cb(null, true);
    } else {
        cb(new Error('Unsupported file format'), false);
    }
};

// Initialize multer middleware
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
    fileFilter: fileFilter 
});

// POST a new product with image uploads
router.post('/add-product', upload.array('images', 5), async (req, res) => {
    const { name, description, price, discountedPrice, category, brand, stock, rating, numReviews } = req.body;

    try {
        // Prepare image URLs
        const images = req.files.map(file => ({
            url: `/media/${file.filename}`,
            alt: file.originalname
        }));

        const newProduct = new Product({
            name,
            description,
            price,
            discountedPrice,
            category,
            brand,
            stock,
            images, // Add the image URLs to the product schema
            rating,
            numReviews,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Unable to create product', error });
    }
});

module.exports = router;
