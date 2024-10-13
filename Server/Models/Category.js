const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Self-referencing for parent-child categories
        default: null,
    },
    image: {
        url: String,
        alt: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
