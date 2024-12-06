'use client';
import React from 'react';

const Cart: React.FC = () => {
  return (
    <div className='container w-full px-[120px] py-[493] mt-10'>
      {/* Breadcrumb */}
      <p className="text-sm text-gray-600 mb-4">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>{' '}
        / Cart
      </p>

      {/* Cart Items */}
      <div className="space-y-6 px-{1170] py-[436]">
        {/* Header Row */}
        <div className="hidden md:flex bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded">
          <div className="flex-1">Product</div>
          <div className="w-24 text-center">Price</div>
          <div className="w-32 text-center">Quantity</div>
          <div className="w-24 text-center">Subtotal</div>
        </div>

        {/* Product 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow rounded-lg p-4">
          {/* Product Details */}
          <div className="flex flex-1 items-center mb-4 md:mb-0">
            <img
              src="/monitor.png"
              alt="LCD Monitor"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <span className="font-medium">LCD Monitor</span>
          </div>
          {/* Price */}
          <div className="w-24 text-center text-gray-600">$650</div>
          {/* Quantity */}
          <div className="w-32 text-center">
            <select
              className="border border-gray-300 rounded px-2 py-1"
              defaultValue={1}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          {/* Subtotal */}
          <div className="w-24 text-center text-gray-600">$650</div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow rounded-lg p-4">
          {/* Product Details */}
          <div className="flex flex-1 items-center mb-4 md:mb-0">
            <img
              src="/gamepad.png"
              alt="H1 Gamepad"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <span className="font-medium">H1 Gamepad</span>
          </div>
          {/* Price */}
          <div className="w-24 text-center text-gray-600">$550</div>
          {/* Quantity */}
          <div className="w-32 text-center">
            <select
              className="border border-gray-300 rounded px-2 py-1"
              defaultValue={2}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          {/* Subtotal */}
          <div className="w-24 text-center text-gray-600">$1100</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
          Return to Shop
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Total */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
        {/* Coupon Code Section */}
        <div>
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded mb-4"
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Section */}
        <div className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <button className="w-full mt-4 px-4 py-2 pb-8 bg-red-500 text-white rounded hover:bg-red-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
