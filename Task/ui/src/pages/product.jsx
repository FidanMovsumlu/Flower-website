import React, { useEffect, useState } from "react";
import Navbar2 from "../components/navbar2";
import Products from "../components/products";
import Search from "../components/search";

function Product() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("flower");
 const [search, setSearch] = useState("");
 const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products") 
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
  
   .filter((item) =>
    activeCategory === "all"
      ? true
      : item.category === activeCategory
  )
    .sort((a, b) => {
  const priceA = parseInt(a.price);
  const priceB = parseInt(b.price);

  if (sortOrder === "low-high") {
    return priceA - priceB;
  }
  if (sortOrder === "high-low") {
    return priceB - priceA;
  }
  return 0;
  });
  
  

  return (
    <div className="bg-[#efe1e9] min-h-screen dark:bg-gray-700">
      <section className="mt-[75px] py-[40px] ">
        
           <Search search={search} setSearch={setSearch}/>
        <div className="container w-[90%] m-auto flex  flex-col lg:flex-row gap-6">

       
          <div className="w-full lg:w-[20%]">
            <Navbar2
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
               setSortOrder={setSortOrder} 
            />
          </div>

         
          <div className="w-full lg:w-[80%]">
            <Products products={filteredProducts} />
          </div>

        </div>
      </section>
    </div>
  );
}

export default Product;