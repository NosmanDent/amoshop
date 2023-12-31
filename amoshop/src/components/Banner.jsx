import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="p-6 py-12 bg-black text-white mb-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-5xl tracking-tighter font-bold">
            Up to
            <br className="sm:hidden" />
            50% Off on Kids Bag
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping!! Use code:</span>
            <span className="font-bold text-lg">YOUR NAME</span>
          </div>
          <Link to="kidsandbabies">
            <h1
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400"
            >
              Shop Now
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
