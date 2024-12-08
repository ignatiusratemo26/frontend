import React from "react";
import PopularShoes from '../components/PopularShoes.js';
import runningShoes from '../images/running_shoes.webp';
import logo1 from '../images/nikeLogo.png';
import logo2 from '../images/adidasLogo.jpeg';
import logo3 from '../images/skechersLogo.jpeg';
import logo4 from '../images/logo4.webp';
import { Link } from "react-router-dom";

const HomePage = ({ setCurrentPage }) => {


    return (
      <div className="container mx-auto px-4 py-8 relative overflow-hidden">
        {/* Existing content */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl text-black font-bold mb-4 animate-fade-in">Step into Style</h1>
            <p className="text-xl text-black mb-6 animate-fade-in animation-delay-300">Discover the perfect shoes for every occasion.</p>
            <button onClick={() => setCurrentPage('shop')} className="shop-now-button animate-bounce">Shop Now</button>
          </div>
          <div className="md:w-1/2">
            <img src={runningShoes} alt="Featured Shoe" className="w-full h-auto rounded-lg shadow-lg featured-image animate-float" />
          </div>
        </div>
        <div className="mb-12">
          <PopularShoes />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card bg-white p-6 rounded-lg shadow-md animate-slide-in-left">
            <h2 className="text-2xl text-black font-semibold mb-4">Featured Collection</h2>
            <p className="mb-4 text-gray-700">Discover our latest arrivals and bestsellers.</p>
            <Link to="/shop" className="visible-button bg-red-500">Shop Now</Link>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-md animate-slide-in-right">
            <h2 className="text-2xl font-semibold mb-4 text-black">About Us</h2>
            <p className="mb-4 text-gray-700">At ShoeShop, we're passionate about providing high-quality footwear for every occasion. Our curated collection features the latest trends and timeless classics to keep you stepping in style.</p>
            <button onClick={() => setCurrentPage('about')} className="visible-button">Learn More</button>
          </div>
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg animate-fade-in animation-delay-600">
          <h2 className="text-2xl text-gray-600 font-semibold mb-4 text-center">Our Brands</h2>
          <div className="flex justify-around items-center">
            <img src={logo1} alt="Brand 1" className="h-20 animate-pulse" />
            <img src={logo2} alt="Brand 2" className="h-20 animate-pulse animation-delay-150" />
            <img src={logo3} alt="Brand 3" className="h-20 animate-pulse animation-delay-300" />
            <img src={logo4} alt="Brand 4" className="h-20 animate-pulse animation-delay-450" />
          </div>
        </div>
      </div>
    );
  };

export default HomePage;