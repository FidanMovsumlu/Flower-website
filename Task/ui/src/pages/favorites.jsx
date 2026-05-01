import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router";

function Favorites() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="bg-[#efe1e9] dark:bg-gray-700 min-h-screen pt-[100px]">
      
      <div className="w-[90%] m-auto">

        
        <h2 className="text-[50px] font-bold text-[#f45da4] text-center mb-10">
          Favorites
        </h2>

    
        {favorites.length === 0 ? (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">

            <div className="w-[80px] h-[80px] rounded-full border-2 border-[#f45da4] flex items-center justify-center text-[#f45da4] text-2xl font-bold">
              i
            </div>

            <p className="mt-4 text-gray-500 text-lg">
              No products found
            </p>

          </div>
        ) : (

         
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">

            {favorites.map((item) => (
              <div
                key={item.id}
                className="group w-[300px] h-[400px] flex flex-col"
              >
                
               
                <div className="relative overflow-hidden rounded-t-[20px]">
               <Link to={`/products/${item.id}`}> 
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
        />
 </Link>
                
                  <FaHeart
                    onClick={() => toggleFavorite(item)}
                    className="absolute top-3 right-3 text-red-500 cursor-pointer"
                  />
                </div>

                <div className="bg-white p-5 rounded-b-[20px]">
                  <p className="text-[16px]">{item.name}</p>

                  <div className="flex justify-between mt-2">
                    <p className="text-red-600 font-medium">{item.price}</p>
                      <Link to={`/products/${item.id}`}>
    <FaArrowRight className="cursor-pointer hover:scale-125 transition" />
  </Link>
                  </div>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Favorites;