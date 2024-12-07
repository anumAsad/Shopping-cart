import Image from 'next/image';
import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const OurProduct = () => {
  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: 100,
      rating: 3,
      reviews: 35,
      image: "/dog.png",
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: 360,
      rating: 4,
      reviews: 95,
      image: "/camera.png",
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 325,
      image: "/laptop.png",
    },
    {
      id: 4,
      name: "Small BookShelf",
      price: 360,
      oldPrice: null,
      rating: 4.8,
      reviews: 65,
      image: "/bookshelf.png",
    },
    {
        id: 5,
        name: "Kids Electric Car",
        price: 960,
        rating: 5,
        reviews: 65,
        image: "/car.png",
      },
      {
        id: 6,
        name: "Jr. Zoom Soccer Cleats",
        price: 1160,
        rating: 5,
        reviews: 35,
        image: "/joggers.png",
      },
      {
        id: 7,
        name: "GP11 Shooter USB Gamepad",
        price: 660,
        rating: 4.3,
        reviews: 55,
        image: "/game.png",
      },
      {
        id: 8,
        name: "Quilted Satin Jacket",
        price: 660,
        rating: 4.3,
        reviews: 55,
        image: "/jacket.png",
      },
  ];

  return (
    <div className="container w-full px-[120px] py-[493] mt-10 border-2 border-neutral-100 ">
        <div className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'>
        <h3 >Our Products</h3>
        </div>
      <div className="mb-6 flex justify-between items-center">
        <div><h2 className="text-2xl font-semibold">Explore Our Products</h2>
        </div>
        <div className='flex gap-4 text-2xl'>
        <button className="bg-gray-200 text-black rounded-full">
        <IoIosArrowRoundBack />
        </button>
        <button className="bg-gray-200 text-black rounded-full">
        <IoIosArrowRoundForward />
        </button>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={190}
                height={180}
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:shadow-lg">
                ❤️
              </button>
              <button className="absolute top-2 right-12 bg-white p-1 rounded-full shadow-md hover:shadow-lg">
                👁️
              </button>
            </div>
            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-bold">${product.price}</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.floor(product.rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
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
  );
};

export default OurProduct;
