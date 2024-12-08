import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, fetchCart, addToCart, removeFromCart, purchaseCart } = useContext(CartContext);
  const { user } = useContext(UserContext);


  useEffect(() => {
    fetchCart();
    
  }, []);

  const handleAddToCart = (product) => {
    if (user) {
      addToCart(product);
    } else {
      alert("Please log in to add items to the cart.");
    }
  };

  const handleRemoveFromCart = (productId) => {
    if (user) {
      removeFromCart(productId);
    } else {
      alert("Please log in to remove items from the cart.");
    }
  };

  const handlePurchaseCart = () => {
    if (user) {
      purchaseCart();
      alert("Purchase successful!");
    } else {
      alert("Please log in to purchase items.");
    }
  }
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4 border-b pb-4">
              <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover mr-4" />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">Ksh {item.product.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-900">Remove</button>
            </div>
          ))}
          <div className="text-xl font-bold mt-4">
            Total: Ksh {cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
          </div>
          {user ? (
            <button onClick={()=> handlePurchaseCart()} className="bg-red-800 text-white px-4 py-2 rounded mt-4">Make Payment</button>
          ) : (
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Log in to Checkout</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
