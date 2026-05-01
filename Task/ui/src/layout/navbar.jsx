import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { setCartOpen } = useCart();
  const { favorites } = useContext(FavoritesContext);
  const [open, setOpen] = useState(false)
   const [isDark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
let id = localStorage.getItem("id")
const signOut = () => {
  localStorage.removeItem("id")
}
const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }
  const { t } = useTranslation();
  

  return (
  <div className={isDark ? "dark" : ""}>
    <nav className="w-full absolute top-0 left-0 z-50 px-6 md:px-10 py-2 flex items-center justify-between bg-[#efe1e9] text-white dark:bg-[#1F1F1F]">
      
      <Link to={"/"}><h1 className="text-[35px] md:text-[55px] font-bold logo text-[#f45da4]">
        Lilium
      </h1></Link>

    
      <ul className="hidden md:flex gap-10 text-lg font-medium ">
        <li className="text-[#f45da4] cursor-pointer"><Link to={"/"}>{t("home1")}</Link></li>
        <li className="text-[#f45da4] cursor-pointer"><Link to={"/about"}>{t("about")}</Link></li>
        <li className="text-[#f45da4] cursor-pointer"><Link to={"/product"}>{t("shop")}</Link></li>
        <li className="text-[#f45da4] cursor-pointer"><Link to={"/contact"}>{t("contact")}</Link></li>
      </ul>

      <div className="hidden md:flex  gap-4 text-[20px]">
        
       <Link to={"/favorites"} className="relative">
  <i className="fa-solid fa-heart cursor-pointer text-[#f45da4]"></i>

  {favorites.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full">
      {favorites.length}
    </span>
  )}
</Link>
        <i className="fa-solid fa-cart-shopping cursor-pointer text-[#f45da4] relative top-1.5" onClick={() => setCartOpen(true)} ></i>
        <button onClick={toggleTheme}>
{
  isDark ? ( <i className="fa-regular fa-lightbulb cursor-pointer text-[#f45da4] mb-[10px]"></i>) : (<i className="fa-solid fa-moon cursor-pointer text-[#f45da4] mb-[10px] "></i>)
}
        </button>
 <select
        onChange={changeLanguage}
        value={i18n.language}
        className="border-pink-500 border-2 text-pink-500 rounded-[20px] focus:outline-none focus:ring-0 p-[5px] text-sm bg-transparent cursor-pointer"
      >
        <option value="en">EN</option>
        <option value="az">AZ</option>
        <option value="ru">RU</option>
      </select>
        {
          id ? <Link to={"/login"} onClick={signOut}><i class="fa-solid fa-arrow-right-from-bracket  cursor-pointer text-[#f45da4] text-[20px] mb-[10px]"></i></Link> : <Link to={"/login"}><i class="fa-solid fa-arrow-right-to-bracket  cursor-pointer text-[#f45da4] text-[20px] mb-[10px]"></i></Link>
        }
      </div>

      <div 
        className="md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className={`w-6 h-0.5 bg-[#f45da4] mb-1 transition ${open && "rotate-45 translate-y-2"}`}></div>
        <div className={`w-6 h-0.5 bg-[#f45da4] mb-1 transition ${open && "opacity-0"}`}></div>
        <div className={`w-6 h-0.5 bg-[#f45da4] transition ${open && "-rotate-45 -translate-y-2"}`}></div>
      </div>

     
      <div className={`absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-lg transition-all duration-300 
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        
        <ul className="flex flex-col items-center gap-4 text-[#f45da4]">
          <li><Link  to={"/"}>{t("home1")}</Link></li>
          <li><Link to={"/about"}>{t("about")}</Link></li>
          <li><Link  to={"/product"}>{t("shop")}</Link></li>
          <li><Link to={"/contact"}>{t("contact")}</Link></li>
        </ul>


        <div className="flex gap-6 text-[#f45da4]">
          <Link to={"/favorites"} className="relative">
  <i className="fa-solid fa-heart"></i>

  {favorites.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full">
      {favorites.length}
    </span>
  )}
</Link>
          <i className="fa-solid fa-cart-shopping" onClick={() => setCartOpen(true)}></i>
         <button onClick={toggleTheme}>
{
  isDark ? ( <i className="fa-regular fa-lightbulb cursor-pointer text-[#f45da4] mb-[10px]"></i>) : (<i className="fa-solid fa-moon cursor-pointer text-[#f45da4] mb-[10px] "></i>)
}
        </button>
          {
          id ? <Link to={"/login"} onClick={signOut}><i class="fa-solid fa-arrow-right-from-bracket  cursor-pointer text-[#f45da4] text-[20px] mb-[10px]"></i></Link> : <Link to={"/login"}><i class="fa-solid fa-arrow-right-to-bracket  cursor-pointer text-[#f45da4] text-[20px] mb-[10px]"></i></Link>
        }
        </div>
      </div>

    </nav>
    </div>
  )
}

export default Navbar