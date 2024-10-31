import React, { useState } from 'react';
import img from '../../assets/s23fe.webp';
const productsData = [
    { id: 1, name: 'Speed Force : Knit', category: 'Women', discount: '35%', image: img },
    { id: 2, name: 'Assorted Cross Bag', category: 'Well', discount: '31%', image: img },
    { id: 3, name: 'Fur Pom Pom Gloves', category: 'Men', discount: '20%', image: img },
    { id: 4, name: 'Happy Days Wax Candle', category: 'Women', discount: '15%', image: img },
    { id: 5, name: 'Short Bodysuits – White', category: 'Kids', discount: '25%', image: img },
];

function TopProducts() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="top-products">
            <h2>Top Products</h2>
            <div className="search-bar">
                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button type='submit' className='search-btn'>Enter</button>

            </div>
            <div className="products-list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                            <h4>{product.name}</h4>
                            <div className="product-category-discount">
                                <span className="category">{product.category}</span>
                                <div className="separator"></div>
                                <span className="discount">{product.discount}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopProducts;