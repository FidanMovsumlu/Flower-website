import React, { useEffect, useState, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router';
import { CiDeliveryTruck } from "react-icons/ci";
import { TbArrowBackUp } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FavoritesContext } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

function Detail() { 
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const isFavorite = favorites.some((fav) => fav.id === product.id);
  

  return (
    <div className='mt-[98px] bg-[#efe1e9]'>
      <div className="w-[90%] m-auto py-[50px]">

        <div className="grid md:grid-cols-2 gap-[40px]">

          <div>
            <img
              src={product.image}
              className="w-[700px] rounded-xl "
            />
          </div>

          
          <div>
            <h2 className="text-[28px] font-bold mb-[20px] text-gray-700">
              {product.name}
            </h2>

            <p className="text-[22px] text-[red] font-bold mb-[40px]">
              {product.price}
            </p>

          
            <div className="flex items-center gap-[15px] mb-[40px]">

            
              <button className="bg-[#875d69] text-white px-[20px] py-[10px] rounded-lg flex gap-2 cursor-pointer"  onClick={() => addToCart(product)} >
                <AiOutlineShoppingCart className='mt-[2px] text-[20px]' />
                Səbətə əlavə et
              </button>

              
              <button
                onClick={() => toggleFavorite(product)}
                className="w-[45px] h-[45px] flex items-center justify-center rounded-lg bg-[#875d69]  border border-[#875d69] cursor-pointer"
              >
                <FaHeart
                  className={`text-[18px] transition ${
                    isFavorite ? "text-red-500" : "text-white"
                  }`}
                />
              </button>

            </div>

           
            <div className="text-gray-600 leading-[40px] text-[18px] mb-[50px]">
              {product.description}
            </div>

           
            <div className='flex flex-col gap-7'>

              <div className='flex gap-2'>
                <CiDeliveryTruck className='mt-[2px] text-[26px] text-[#875d69]' />
                <div className='font-bold text-[17px] text-[#b17989]'>
                  Şəhər içi 2 saat ərzində çatdırılma
                </div>
              </div>

              <div className='flex gap-2'>
                <TbArrowBackUp className='mt-[2px] text-[26px] text-[#875d69]' />
                <div className='font-bold text-[17px] text-[#b17989]'>
                  Geri qaytarılma zəmanəti
                </div>
              </div>

              <div className='flex gap-2'>
                <BsBoxSeam className='mt-[2px] text-[22px] text-[#875d69]' />
                <div className='font-bold text-[17px] text-[#b17989]'>
                  Rahat çatdırılma və qaytarma
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Detail;