import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Rose", category: "flower" },
  { id: 2, name: "Tulip", category: "flower" },
  { id: 3, name: "Cactus", category: "plant" },
  { id: 4, name: "Bonsai", category: "plant" },
  { id: 5, name: "Vase", category: "accessories" },
];

const Navbar2 = () => {
  const [activeCategory, setActiveCategory] = useState("flower");
  const categories = ["flower", "plant", "accessories"];
  const filteredProducts = productsData.filter(
    (item) => item.category === activeCategory
  );
  return (
    <div className=" p-4 pt-[30px]">
      <div className="flex gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)} 
            className={`px-5 py-2 rounded-full capitalize 
              ${
                activeCategory === cat
                  ? "bg-pink-500 text-white font-bold"
                  : "text-pink-500 border border-pink-500 hover:bg-pink-100"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {filteredProducts.map((item) => (
          <div key={item.id} className="mb-2">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar2;