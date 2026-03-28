import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full absolute top-0 left-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between text-white">
      
      <h1 className="text-[35px] md:text-[55px] font-bold logo text-[#f2b2d0]">
        Lilium
      </h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        <li className="hover:text-pink-300 cursor-pointer">Home</li>
        <li className="hover:text-pink-300 cursor-pointer">About</li>
        <li className="hover:text-pink-300 cursor-pointer">Product</li>
        <li className="hover:text-pink-300 cursor-pointer">Contact</li>
      </ul>

      {/* ICONS (desktop) */}
      <div className="hidden md:flex gap-6">
        <i className="fa-solid fa-heart cursor-pointer hover:text-pink-300"></i>
        <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-pink-300"></i>
        <i className="fa-solid fa-user cursor-pointer hover:text-pink-300"></i>
      </div>

      {/* BURGER ICON (mobile) */}
      <div 
        className="md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className={`w-6 h-0.5 bg-[#eb9ac0] mb-1 transition ${open && "rotate-45 translate-y-2"}`}></div>
        <div className={`w-6 h-0.5 bg-[#eb9ac0] mb-1 transition ${open && "opacity-0"}`}></div>
        <div className={`w-6 h-0.5 bg-[#eb9ac0] transition ${open && "-rotate-45 -translate-y-2"}`}></div>
      </div>

      {/* MOBILE MENU */}
      <div className={`absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-lg transition-all duration-300 
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        
        <ul className="flex flex-col items-center gap-4 text-[#eb9ac0]">
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Contact</li>
        </ul>

        {/* ICONS (mobile) */}
        <div className="flex gap-6 text-[#eb9ac0]">
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>

    </nav>
  )
}

export default Navbar