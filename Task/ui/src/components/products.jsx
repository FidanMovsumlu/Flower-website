import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";

function Products({ products }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 ">
      {products.map((item) => (
        <div
          key={item.id}
          className="group w-[300px] h-[400px] flex flex-col"
        >
          <div className="relative overflow-hidden rounded-t-[20px]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
            />
            
            <FaHeart className="absolute top-3 right-3 text-[18px]  text-red-900 opacity-0 group-hover:opacity-100 transition cursor-pointer" />
          </div>

          <div className="bg-white p-5 rounded-b-[20px]">
            <p>{item.name}</p>

            <div className="flex justify-between mt-2">
              <p className="text-red-600">{item.price}</p>
              <FaArrowRight className="cursor-pointer hover:scale-130 transition" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;