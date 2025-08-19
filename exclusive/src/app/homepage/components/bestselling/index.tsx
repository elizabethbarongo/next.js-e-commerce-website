'use client';

import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";

const bestSellers = [
  {
    id: 1,
    title: "The north coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviewsCount: 65,
    imageUrl: "/images/north-coat.png"
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviewsCount: 65,
    imageUrl: "/images/gucci-bag.png"
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviewsCount: 65,
    imageUrl: "/images/cpu-cooler.png"
  },
  {
    id: 4,
    title: "Small BookShelf",
    price: 360,
    originalPrice: null,
    rating: 5,
    reviewsCount: 65,
    imageUrl: "/images/bookshelf.png"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-0.5">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`text-yellow-400`}>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function BestSellingProducts() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-10 py-8 border-b border-gray-300">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-6 h-11 rounded-md bg-[#DB4444]" />
        <h3 className="font-semibold text-lg text-[#DB4444]">This Month</h3>
      </div>

      <div className="flex items-end justify-between mb-6">
        <h2 className="text-4xl font-semibold text-black tracking-tight">
          Best Selling Products
        </h2>

        <button className="bg-[#DB4444] hover:bg-red-600 text-white px-9 py-3 rounded-lg font-semibold text-base transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {bestSellers.map(({ id, title, price, originalPrice, rating, reviewsCount, imageUrl }) => (
          <article
            key={id}
            className="group relative bg-[#FAFAFA] rounded-lg shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative bg-gray-100 h-64 flex items-center justify-center p-5">
              <Image
                src={imageUrl}
                alt={title}
                width={180}
                height={160}
                className="w-full h-full object-contain"
              />

              <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center">
                  <FiHeart className="h-5 w-5 text-black" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center">
                  <IoEyeOutline className="h-5 w-5 text-black" />
                </button>
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Add To Cart
              </button>
            </div>

            <div className="p-5">
              <h3 className="text-black font-medium mb-2">{title}</h3>
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-[#DB4444] font-semibold">${price}</span>
                {originalPrice && (
                  <span className="text-gray-400 line-through">${originalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-3">
                <StarRating rating={rating} />
                <span className="text-gray-500 text-sm">({reviewsCount})</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
