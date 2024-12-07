import Image from 'next/image';
import React from 'react';

const BestProduct = () => {
  const products = [
    {
      id: 1,
      name: "The north coat",
      price: 260,
      oldPrice: 360,
      rating: 4.5,
      reviews: 65,
      image: "/coat.png",
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      reviews: 65,
      image: "/bag.png",
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4,
      reviews: 65,
      image: "/cooler.png",
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
  ];

  return (
    <div className="className='container w-full px-[120px] py-[493] mt-10 border-2 border-neutral-100 ">
        <div className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'>
        <h3 >This Month</h3>
        {/* <div>
        <Image
        src={ThisMonth}
        alt='Image'
        width={125}
        height={40}
        /> */}
        </div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Best Selling Products</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          View All
        </button>
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
                width={140}
                height={146}
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
              {product.oldPrice && (
                <span className="text-gray-500 line-through ml-2">
                  ${product.oldPrice}
                </span>
              )}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProduct;
