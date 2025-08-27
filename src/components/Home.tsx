import React from 'react';
import bgTopHome from '../../public/images/background.jpg';

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto my-8 p-6 bg-gray-100 rounded-xl shadow-sm">
      <div className="flex items-center mb-4"></div>
        <img src={bgTopHome} alt="GSale logo" className="h-8 w-8 rounded-full object-cover" />

      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to GSale!</h2>
      <p className="text-gray-600 text-lg mb-6">
        Discover amazing deals and shop the latest products in our e-commerce store.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-1">Product Name</h3>
          <p className="text-gray-500 mb-3">$29.99</p>
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-1">Another Product</h3>
          <p className="text-gray-500 mb-3">$49.99</p>
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-1">Featured Item</h3>
          <p className="text-gray-500 mb-3">$79.99</p>
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;