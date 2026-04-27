import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#895d6a] text-white py-10 dark:bg-black">
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-5 text-center ">
        <div className="max-w-xs mx-auto md:mx-0">
          <h2 className="text-2xl font-bold mb-4 text-left">Lilium</h2>
          <p className="text-[#d4d1d1] text-[15px] text-sm text-left">
           {t("description")}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <ul className="space-y-2 text-[#d4d1d1]">
            <li>
              <Link to={"/"} className="hover:text-pink-400 transition">
               {t("home3")}
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-pink-400 transition">
             {t("about1")}
              </Link>
            </li>
            <li>
             <Link to={"/product"} className="hover:text-pink-400 transition">
             {t("product")}
             </Link>
            </li>
            <li>
               <Link to={"/contact"} className="hover:text-pink-400 transition">
             {t("contact1")}
             </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-[#d4d1d1] ">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                {t("faq")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
               {t("shipping")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                {t("returns")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
              {t("help")}
              </a>
            </li>
          </ul>
        </div>

        <div className="max-w-xs mx-auto md:mx-0 ">
          <h2 className="text-xl font-semibold mb-4 mr-[80px]">{t("contactTitle")}</h2>
          <div className="space-y-2 text-left flex flex-col">
            <div className="flex">
              
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[20px] pr-[5px]"
              />
              <span className="text-[#d4d1d1]">{t("address")}</span>
            </div>
            <div>
          
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[18px] pr-[5px]"
              />
              <span className="text-[#d4d1d1]">
                <a href="tel:">+1 234 122 122</a>
              </span>
            </div>
          </div>

          <div className=" space-x-4 mt-[20px]">
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className=" p-2 rounded-[20px] bg-white text-[#714d58] hover:bg-[#eaaeba] hover:text-white transition transform hover:-translate-y-1 hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className=" p-2 rounded-[20px] bg-white text-[#714d58] hover:bg-[#eaaeba] hover:text-white transition transform hover:-translate-y-1 hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className=" p-2 rounded-[20px] bg-white text-[#714d58] hover:bg-[#eaaeba] hover:text-white transition transform hover:-translate-y-1 hover:scale-110"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a
                href="#"
                className=" p-2 rounded-[20px] bg-white text-[#714d58] hover:bg-[#eaaeba] hover:text-white transition transform hover:-translate-y-1 hover:scale-110"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          <div className="text-left space-x-4">
            <h2 className="text-[18px] mt-[20px] mb-[10px] font-bold">
            {t("securePayment")}
            </h2>
            <FontAwesomeIcon icon={faCcVisa} className="text-4xl" />
            <FontAwesomeIcon icon={faCcMastercard} className="text-4xl" />
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-white text-sm">
     {t("rights")}
      </div>
    </footer>
  );
}

export default Footer;
