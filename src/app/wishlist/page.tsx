'use client'
import Image from "next/image";
import React, { useState } from "react";

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: "The north coat", price: 260, image: "/coat.png" },
    { id: 2, name: "Gucci duffle bag", price: 960, image: "/bag.png" },
    { id: 3, name: "RGB liquid CPU Cooler", price: 160, image: "/cooler.png" },
    { id: 4, name: "Small BookShelf", price: 360, image: "/bookshelf.png" },
  ];

  // Toggle wishlist function
  const toggleWishlist = (product: Product) => {
    if (wishlist.find((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Wishlist Section */}
        <h2 className="text-2xl font-semibold mb-6">Wishlist</h2>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-lg font-medium">{item.name}</h3>
                <span className="text-red-500 font-bold">${item.price}</span>
                <button
                  onClick={() => toggleWishlist(item)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Your wishlist is empty.</p>
        )}

        {/* Products Section */}
        <h2 className="text-2xl font-semibold mt-12 mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
              <span className="text-red-500 font-bold">${product.price}</span>
              <button
                onClick={() => toggleWishlist(product)}
                className={`mt-2 px-4 py-2 rounded ${
                  wishlist.find((item) => item.id === product.id)
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {wishlist.find((item) => item.id === product.id)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
