import React, { useState } from 'react';
import productsData from '../data/products.json';

function ProductPage() {
    const [products, setProducts] = useState(productsData);
    const [newProduct, setNewProduct] = useState({
        storeName: '',
        name: '',
        price: '',
        description: ''
    });

  
    const addProduct = () => {
        const newId = products.length + 1;
        setProducts([...products, { id: newId, ...newProduct }]);
        setNewProduct({ storeName: '', name: '', price: '', description: '' });
    };

  
    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div>
            <h2>Product Management</h2>
            <div>
              <h3>Add New Product</h3>
              <input
                  type="text"
                  placeholder="Store Name"
                  value={newProduct.storeName}
                  onChange={(e) => setNewProduct({ ...newProduct, storeName: e.target.value })}
              />
              <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <input
                  type="text"
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />
              <button onClick={addProduct}>Add Product</button>
            </div>  
            <h3>Product List</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h4>{product.name}</h4>
                        <p>{product.storeName}</p>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductPage;
