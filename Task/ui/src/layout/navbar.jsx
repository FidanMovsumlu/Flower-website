import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false)
let id = localStorage.getItem("id")
const signOut = () => {
  localStorage.removeItem("id")
}
  return (
    <nav className="w-full absolute top-0 left-0 z-50 px-6 md:px-10 py-2 flex items-center justify-between bg-[#efe1e9] text-white">
      
      <Link to={"/"}><h1 className="text-[35px] md:text-[55px] font-bold logo text-[#f45da4]">
        Lilium
      </h1></Link>

    
      <ul className="hidden md:flex gap-10 text-lg font-medium ">
        <li className="text-[#f45da4] cursor-pointer"><Link to={"/"}>Home</Link></li>
        <li className="text-[#f45da4] cursor-pointer"><Link to={"/about"}>About</Link></li>
        <li className="text-[#f45da4] cursor-pointer"><Link to={"/product"}>Product</Link></li>
        <li className="text-[#f45da4] cursor-pointer"><Link to={"/contact"}>Contact</Link></li>
      </ul>

      <div className="hidden md:flex gap-6">
        <i className="fa-solid fa-heart cursor-pointer text-[#f45da4]"></i>
        <i className="fa-solid fa-cart-shopping cursor-pointer text-[#f45da4]"></i>
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
          <li><Link  to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link  to={"/product"}>Product</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>


        <div className="flex gap-6 text-[#f45da4]">
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </div>
      </div>

    </nav>
  )
}

export default Navbar