import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link, useNavigate } from "react-router";
function Products({ products }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 ">
      {products.map((item) => {
        const isFavorite = favorites.some((fav) => fav.id === item.id);

        return (
          <div key={item.id} className="group  w-full h-[400px] flex flex-col">
            <div className="relative overflow-hidden rounded-t-[20px]">
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                />
              </Link>

              <FaHeart
                onClick={() => {
                  if (!user) {
                    navigate("/login");
                    return;
                  }
                  toggleFavorite(item);
                }}
                className={`absolute top-3 right-3 text-[18px] cursor-pointer transition
  ${
    isFavorite
      ? "text-red-500 opacity-100"
      : "text-white opacity-0 group-hover:opacity-100"
  }`}
              />
            </div>

            <div className="bg-white p-5 rounded-b-[20px]">
              <p>{item.name}</p>

              <div className="flex justify-between mt-2">
                <p className="text-red-600">{item.price}</p>
                <Link to={`/products/${item.id}`}>
                  {" "}
                  <FaArrowRight className="cursor-pointer hover:scale-125 transition" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
