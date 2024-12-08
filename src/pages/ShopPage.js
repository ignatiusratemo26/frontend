import React, {useState} from "react";
import ProductGrid from "../components/ProductGrid";

const ShopPage = ({ products, addToCart }) => {
    const [category, setCategory] = useState('all');
  
    const filteredProducts = category === 'all' 
      ? products 
      : products.filter(product => product.category === category);
  
    return (
      <div className="shop-page-container">
        <h1 className="text-4xl text-black font-bold text-center mb-8 mt-16">Shop Our Collection</h1>
        <div className="mb-8 flex justify-center">
          <div className="filter-container bg-red-500">
            <label className="mr-2">Filter by:</label>
            <select
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="filter-select"
            >
              <option value="all">All</option>
              <option value="shoes">Shoes</option>
              <option value="slides">Slides</option>
              <option value="boots">Boots</option>
            </select>
          </div>
        </div>
        <ProductGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    );
  };
  export default ShopPage;