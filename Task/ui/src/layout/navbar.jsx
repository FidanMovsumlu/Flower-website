import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { setCartOpen } = useCart();
  const { favorites } = useContext(FavoritesContext);
  const [open, setOpen] = useState(false);

  const [isDark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { i18n } = useTranslation();
  const { t } = useTranslation();


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  
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

  
  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  
  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  
  const handleCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    setCartOpen(true);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <nav className="w-full absolute top-0 left-0 z-50 px-6 md:px-10 py-2 flex items-center justify-between bg-[#efe1e9] text-white dark:bg-[#1F1F1F]">

        <Link to={"/"}>
          <h1 className="text-[35px] md:text-[55px] font-bold logo text-[#f45da4]">
            Lilium
          </h1>
        </Link>

        
        <ul className="hidden md:flex gap-10 text-lg font-medium ">
          <li className="text-[#f45da4]"><Link to={"/"}>{t("home1")}</Link></li>
          <li className="text-[#f45da4]"><Link to={"/about"}>{t("about")}</Link></li>
          <li className="text-[#f45da4]"><Link to={"/product"}>{t("shop")}</Link></li>
          <li className="text-[#f45da4]"><Link to={"/contact"}>{t("contact")}</Link></li>
        </ul>

        
        <div className="hidden md:flex gap-4 text-[20px]">

         
          <Link to={"/favorites"} className="relative">
            <i className="fa-solid fa-heart text-[#f45da4]"></i>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>

          
          <i
            className="fa-solid fa-cart-shopping cursor-pointer text-[#f45da4] mt-[6px]"
            onClick={handleCart}
          ></i>

         
          <button onClick={toggleTheme}>
            {isDark ? (
              <i className="fa-regular fa-lightbulb text-[#f45da4]"></i>
            ) : (
              <i className="fa-solid fa-moon text-[#f45da4]"></i>
            )}
          </button>

         
          <select
            onChange={changeLanguage}
            value={i18n.language}
            className="border-pink-500 border-2 text-pink-500 rounded-[20px] p-[5px] text-sm bg-transparent"
          >
            <option value="en">EN</option>
            <option value="az">AZ</option>
            <option value="ru">RU</option>
          </select>

         
          {user ? (
            <i
              onClick={signOut}
              className="fa-solid fa-arrow-right-from-bracket text-[#f45da4] cursor-pointer mt-[6px]"
            ></i>
          ) : (
            <Link to={"/login"}>
              <i className="fa-solid fa-arrow-right-to-bracket text-[#f45da4] cursor-pointer "></i>
            </Link>
          )}
        </div>

        
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="w-6 h-0.5 bg-[#f45da4] mb-1"></div>
          <div className="w-6 h-0.5 bg-[#f45da4] mb-1"></div>
          <div className="w-6 h-0.5 bg-[#f45da4]"></div>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;