import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { CartContext } from "./CartContext";

const ProductCard = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false);
    const { cartItems, fetchCart, addToCart } = useContext(CartContext);
    const { user } = useContext(UserContext);

    const handleAddToCart = () => {
      if (user) {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1000);
      } else {
        alert("Please log in to add items to the cart.");
      }
    };
  
    return (
      <div className="relative overflow-hidden w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full flex-shrink-0 p-4">
          <img src={product.image} alt={product.name} className="p-8 rounded-t-lg" />
        </div>
        <div className="px-5 pb-5">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h3>
          <p className="product-price">Ksh {product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <button onClick={handleAddToCart} className={`text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Add to cart ${isAdded ? 'added' : ''}`}>
            {isAdded ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    );
  };
  export default ProductCard;