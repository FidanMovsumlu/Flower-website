import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { BsPersonCircle } from "react-icons/bs";

function Navbar() {
  const { setCartOpen } = useCart();
  const { favorites } = useContext(FavoritesContext);

  const [open, setOpen] = useState(false);
  const [isDark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { i18n, t } = useTranslation();

  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setDark(!isDark);

  
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
    <>
      <nav className="w-full absolute top-0 left-0 z-50 px-6 md:px-10 py-2 flex items-center justify-between bg-[#efe1e9] dark:bg-[#1F1F1F]">

        
        <Link to={"/"} onClick={() => setOpen(false)}>
          <h1 className="text-[35px] md:text-[55px] font-bold text-[#f45da4] logo">
            Lilium
          </h1>
        </Link>

        
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li className="text-[#f45da4]"><Link to={"/"}>{t("home1")}</Link></li>
          <li className="text-[#f45da4]"><Link to={"/about"}>{t("about")}</Link></li>
          <li className="text-[#f45da4]"><Link to={"/product"}>{t("shop")}</Link></li>
          <li className="text-[#f45da4]"><Link to={"/contact"}>{t("contact")}</Link></li>
        </ul>

        
        <div className="hidden md:flex gap-4 text-[20px] items-center">

         
          <Link to={"/favorites"} className="relative">
            <i className="fa-solid fa-heart text-[#f45da4]"></i>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>

         
          <i
            className="fa-solid fa-cart-shopping cursor-pointer text-[#f45da4]"
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
            className="border-2 border-pink-500 text-pink-500 rounded-[20px] px-2 py-1 bg-transparent outline-none text-sm"
          >
            <option value="en">EN</option>
            <option value="az">AZ</option>
            <option value="ru">RU</option>
          </select>

          
          {user ? (
            <i
              onClick={signOut}
              className="fa-solid fa-arrow-right-from-bracket text-[#f45da4] cursor-pointer"
            ></i>
          ) : (
            <Link to={"/login"}>
              <BsPersonCircle className="text-[#f45da4] text-[28px]" />
            </Link>
          )}
        </div>

        
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          <div className={`w-6 h-0.5 bg-[#f45da4] mb-1 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-[#f45da4] mb-1 transition ${open ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-[#f45da4] transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </div>
      </nav>

     
      {open && (
        <div className="md:hidden fixed top-[70px] left-0 w-full bg-[#efe1e9] dark:bg-[#1F1F1F] flex flex-col items-center gap-6 py-6 z-40 shadow-lg">

          <Link to={"/"} onClick={() => setOpen(false)} className="text-[#f45da4]">
            {t("home1")}
          </Link>

          <Link to={"/about"} onClick={() => setOpen(false)} className="text-[#f45da4]">
            {t("about")}
          </Link>

          <Link to={"/product"} onClick={() => setOpen(false)} className="text-[#f45da4]">
            {t("shop")}
          </Link>

          <Link to={"/contact"} onClick={() => setOpen(false)} className="text-[#f45da4]">
            {t("contact")}
          </Link>

       
          <div className="flex gap-5 text-[20px] mt-3">

            <Link to={"/favorites"} onClick={() => setOpen(false)}>
              <i className="fa-solid fa-heart text-[#f45da4]"></i>
            </Link>

            <i
              className="fa-solid fa-cart-shopping text-[#f45da4] mt-[6px]"
              onClick={() => {
                handleCart();
                setOpen(false);
              }}
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
            className="border-2 border-pink-500 text-pink-500 rounded-[20px] px-2 py-1 bg-transparent outline-none text-sm"
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
              <BsPersonCircle className="text-[#f45da4] text-[28px]" />
            </Link>
          )}

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;