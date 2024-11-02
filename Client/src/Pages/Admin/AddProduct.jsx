import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { BsCheck2Circle,BsFileText } from "react-icons/bs";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discountedPrice: '',
    category: '',
    brand: '',
    stock: '',
    rating: '',
    numReviews: '',
    images: null,
  });
  const [previewImages, setPreviewImages] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: e.target.files });
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === 'images' && formData.images) {
        Array.from(formData.images).forEach((imageFile) => {
          productData.append('images', imageFile);
        });
      } else {
        productData.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://localhost:4444/api/products/add-product', {
        method: 'POST',
        body: productData,
      });

      if (response.ok) {
        alert('Product added successfully!');
      } else {
        const errorData = await response.json();
        alert(`Failed to add product: ${errorData.message}`);
      }
    } catch (error) {
      alert('An error occurred while adding the product');
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-product-container">
      <div className="header-section">
        <h2>Add New Product</h2>
        <div className="action-buttons">
          <button className="save-draft"><BsFileText/> Save Draft</button>
          <button type="submit" className="add-product" onClick={handleSubmit}><BsCheck2Circle/> Add Product</button>
        </div>
      </div>
      <form className="form-container">
        <div className="form-row">
          <div className="general-info">
            <h3>General Information</h3>
            <label>Name Product</label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label>Description Product</label>
            <textarea
              name="description"
              placeholder="Product Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={handleInputChange}
              required
            />
          </div>
          <label className="upload-section" htmlFor="file-upload">
            <FaCloudUploadAlt className="upload-icon" />
            <p>Choose a file or drag & drop</p>
            <p className="max-size">(Max 5MB)</p>
            <input
              type="file"
              name="images"
              multiple
              id="file-upload"
              onChange={handleImageChange}
            />
            <label htmlFor="file-upload" className="browse-files-button">Browse files</label>
            <div className="image-preview">
              {previewImages.map((src, index) => (
                <img key={index} src={src} alt={`Preview ${index}`} className="preview-image" />
              ))}
            </div>
          </label>
        </div>
        <div className="form-row">
          <div className="pricing-stock">
            <h3>Pricing And Stock</h3>
            <label>Base Pricing</label>
            <input
              type="number"
              name="price"
              placeholder="Base Pricing"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleInputChange}
              required
            />
            <label>Discounted Price</label>
            <input
              type="number"
              name="discountedPrice"
              placeholder="Discounted Price"
              value={formData.discountedPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="category-section">
            <h3>Category</h3>
            <label>Product Category</label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;