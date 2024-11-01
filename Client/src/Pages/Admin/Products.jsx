import React, { useEffect, useState } from 'react';
import axios, { all } from 'axios';
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    createColumnHelper,
} from '@tanstack/react-table';
import { IoAddCircle } from "react-icons/io5";

const columnHelper = createColumnHelper();

// Column definitions
const columns = [
    columnHelper.accessor('images', {
        header: 'Photo',
        cell: (info) => {
            const baseUrl = 'http://localhost:4444'; // Base URL of your server
            const images = info.getValue();
            const imageUrl = images.length > 0 ? `${baseUrl}${images[0].url}` : '/path/to/default-image.jpg';
            return (
                <img
                    src={imageUrl}
                    alt={images.length > 0 ? images[0].alt : 'Product'}
                    className="product-image"
                    style={{ width: '50px', height: '50px' }} // Adjust the size as needed
                />
            );
        },
    }),
    columnHelper.accessor('name', {
        header: 'Name',
    }),
    columnHelper.accessor('price', {
        header: 'Price',
    }),
    columnHelper.accessor('stock', {
        header: 'Stock',
    }),
    columnHelper.display({
        header: 'Action',
        cell: () => (
            <button className="manage-button">
                Manage
            </button>
        ),
    }),
];

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4444/api/products/');
            setAllProducts(response.data);
        } catch (error) {
            console.error('Error fetching the products:', error);
        }
    };

    const table = useReactTable({
        data: allProducts,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const handleAddProduct = () => {
        alert('Add product functionality to be implemented');
    };

    useEffect(() => {
        fetchProducts();
    }, []);
console.log("allProducts",allProducts)
    return (
        <div className="products-container">
            <div className="top-bar">
                <h1>Products</h1>
                <button className="add-button" onClick={handleAddProduct}>
                    <IoAddCircle/>
                </button>
            </div>
            <table className="products-table">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
