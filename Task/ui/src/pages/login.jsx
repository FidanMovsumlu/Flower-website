import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
function Login() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  const [emailVal, setEmailVal] = useState(false)
    const [passVal, setPassVal] = useState(false)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
  const signIn = (e) => {
    e.preventDefault();

    if (!user.email) setEmailVal(true);
    if (!user.pass) setPassVal(true);

    if (user.email && user.pass) {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data) => {
          
          let founded = data.find(
            (u) =>
    u.email?.trim().toLowerCase() === user.email.trim().toLowerCase() &&
    u.pass?.trim() === user.pass.trim()
          );

          if (founded) {
            localStorage.setItem("user", JSON.stringify(founded));

            
            if (founded.role === "admin") {
              navigate("/admin");
            } else {
              navigate("/");
            }
          } else {
            setSuccess(true);
          }
        });
    }
  };
  
  return (
    <div className="h-screen flex items-center justify-center bg-[radial-gradient(circle,_rgba(232,137,180,1)_0%,_rgba(255,255,255,1)_100%)]">
      <div className="bg-white p-8 rounded-xl shadow-lg ">
        <h1 className="text-5xl font-bold text-center mb-6 text-[#ea6da7]">
          Welcome Back!
        </h1>
        <h2 className="text-4xl font-bold text-center mb-6 text-[#ea6da7] py-[10px]">
          Log In
        </h2>

        <form className="flex flex-col gap-4" onSubmit={signIn}>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="p-3 w-full rounded-md border-2 border-gray-300 focus:border-pink-400 focus:outline-none transition-all duration-300 hover:shadow-md"
              onChange={(e) =>{ setUser({ ...user, email: e.target.value })
            setEmailVal(false)
            setSuccess(false)
            }}
              value={user.email}
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute  right-3.5 top-4 text-gray-400"
            />
           {emailVal && <span className="text-red-500 text-[14px]">Email boş ola bilməz</span>}
          </div>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="p-3 w-full rounded-md border-2 border-gray-300 focus:border-pink-400 focus:outline-none transition-all duration-300 hover:shadow-md"
              onChange={(e) =>{ setUser({ ...user, pass: e.target.value })
            setPassVal(false)
            setSuccess(false)
            }}
              value={user.pass}
            />
            <FontAwesomeIcon
              icon={show ? faEyeSlash : faEye}
              className="absolute text-gray-400 cursor-pointer right-3.5 top-4"
              onClick={() => setShow(!show)}
            />
             {passVal && <span className="text-red-500 text-[14px]">Şifrə boş ola bilməz</span>}
              {success && <span className="text-red-500 text-[14px]">Email və ya Şifrə yanlışdır!</span>}
          </div>
          <button
            type="submit"
            className="mt-4 p-3 bg-[#ea6da7] text-white font-semibold rounded-[30px] hover:bg-pink-500 hover:scale-105 transition-all duration-300"
          >
            Log In
          </button>
          <div className="flex gap-[8px]">
            <p>Don't have an account?</p>
            <Link to="/register" className="text-[#ea6da7] underline">
              Register
            </Link>
          </div>
          <div className="flex gap-[8px]">
            <p>Continue as Guest</p>
            <Link to={"/"} className="text-[#ea6da7] underline">
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
