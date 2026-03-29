import React, { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
function Register() {
    const [show, setShow] = useState(false)
  return (
    <div className="h-screen flex items-center justify-center bg-[radial-gradient(circle,_rgba(232,137,180,1)_0%,_rgba(255,255,255,1)_100%)]">
      <div className="bg-white p-8 rounded-xl shadow-lg ">
        <h1 className="text-5xl font-bold text-center mb-6 text-[#ea6da7]">Welcome!</h1>
        <h2 className="text-3xl font-bold text-center mb-6 text-[#ea6da7] py-[20px]">Register</h2>
        
        <form className="flex flex-col gap-4">
            <div className="flex gap-[10px]">
          <div className="relative">
            <input
            type="text"
            placeholder="First name"
            className="p-3 rounded-md border-2 border-gray-300 focus:border-pink-400 focus:outline-none transition-all duration-300 hover:shadow-md"
          />
           <FontAwesomeIcon
            icon={faUser}
            className="absolute right-3.5 top-4 text-gray-400"
          />
          </div>

          <div className="relative">
            <input type="text"
          placeholder="Surname" 
          className="p-3 rounded-md border-2 border-gray-300 focus:border-pink-400 focus:outline-none transition-all duration-300 hover:shadow-md"
          />
           <FontAwesomeIcon
            icon={faUser}
            className="absolute right-3.5 top-4 text-gray-400"
          />
          </div>
          </div>

          <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="p-3 w-full rounded-md border-2 border-gray-300 focus:border-pink-400 focus:outline-none transition-all duration-300 hover:shadow-md"
          />
           <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute  right-3.5 top-4 text-gray-400"
          />
          </div>

          <div className="relative">
          <input
            type={show ? "text" :"password"}
            placeholder="Password"
            className="p-3 w-full rounded-md border-2 border-gray-300 focus:border-pink-400 focus:outline-none transition-all duration-300 hover:shadow-md"
          />
          <FontAwesomeIcon
            icon={show ? faEyeSlash : faEye}
            className="absolute text-gray-400 cursor-pointer right-3.5 top-4"
            onClick={() => setShow(!show)}
          />
          </div>
          <button
            type="submit"
            className="mt-4 p-3 bg-[#ea6da7] text-white font-semibold rounded-[30px] hover:bg-pink-500 hover:scale-105 transition-all duration-300"
          >
            Register
          </button>
          <div className="flex gap-[8px]">
            <p>Already have an account?</p>
           <Link to="/login" className="text-blue-400 underline">
          Log in
        </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
