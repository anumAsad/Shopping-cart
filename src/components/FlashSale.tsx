import Image from "next/image";
import React from "react";
import FlashSaleCountdown from "../components/Countdown";

const FlashSales = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: 40,
      image: "/gamepad.png",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      image: "/keyboard.png",
      rating: 4.0,
      reviews: 75,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: 30,
      image: "/monitor.png",
      rating: 4.8,
      reviews: 99,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: 25,
      image: "/chair.png",
      rating: 4.3,
      reviews: 99,
    },
  ];
  const saleEndTime = "2024-12-20T23:59:59";

  return (
    <div className='container w-full px-[120px] py-[493] mt-10 bg-white border-2 border-neutral-100'>
      <div className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'>
      <h3 >Today&apos;s</h3>
      </div>
      <div>
        <h2 className="flex gap-8 text-3xl font-bold text-center items-center mb-6">Flash Sales
        <FlashSaleCountdown endTime={saleEndTime} />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={172}
                  height={152}
                  className="w-full h-40 object-contain"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-red-500 font-bold">${product.price}</span>
                <span className="text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {"★".repeat(Math.round(product.rating))}
                  {"☆".repeat(5 - Math.round(product.rating))}
                </div>
                <span className="text-gray-500 text-sm ml-2">
                  ({product.reviews})
                </span>
              </div>
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-blue-600">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
