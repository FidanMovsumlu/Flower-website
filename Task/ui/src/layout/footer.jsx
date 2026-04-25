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
function Footer() {
  return (
    <footer className="bg-[#895d6a] text-white py-10 dark:bg-black">
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-5 text-center ">
        <div className="max-w-xs mx-auto md:mx-0">
          <h2 className="text-2xl font-bold mb-4 text-left">Lilium</h2>
          <p className="text-[#d4d1d1] text-[15px] text-sm text-left">
            We bring beauty and joy to your life with our exquisite flowers. Let
            us make every moment bloom with love and color. Our fresh blooms are
            carefully selected to brighten your day. Discover the perfect
            flowers for every occasion with us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <ul className="space-y-2 text-[#d4d1d1]">
            <li>
              <Link to={"/"} className="hover:text-pink-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-pink-400 transition">
              About
              </Link>
            </li>
            <li>
             <Link to={"/product"} className="hover:text-pink-400 transition">
             Product
             </Link>
            </li>
            <li>
               <Link to={"/contact"} className="hover:text-pink-400 transition">
             Contact
             </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-[#d4d1d1] ">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Help
              </a>
            </li>
          </ul>
        </div>

        <div className="max-w-xs mx-auto md:mx-0 ">
          <h2 className="text-xl font-semibold mb-4 mr-[80px]">Contact</h2>
          <div className="space-y-2 text-left flex flex-col">
            <div className="flex">
              {" "}
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[20px] pr-[5px]"
              />{" "}
              <span className="text-[#d4d1d1]">Street 13 Cefer Cabbarli</span>
            </div>
            <div>
              {" "}
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
              Secure Payment
            </h2>
            <FontAwesomeIcon icon={faCcVisa} className="text-4xl" />
            <FontAwesomeIcon icon={faCcMastercard} className="text-4xl" />
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-white text-sm">
        &copy; 2026 Baku Lilium. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
