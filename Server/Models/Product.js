const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    brand: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    images: [
        {
            url: String,
            alt: String,
        }
    ],
    // reviews: [
    //     {
    //         user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //         rating: { type: Number, required: true },
    //         comment: { type: String },
    //         createdAt: { type: Date, default: Date.now },
    //     }
    // ],
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
