import React from 'react'
import { Link, Navigate, Outlet } from "react-router-dom";
import { PiFlowerTulipBold } from "react-icons/pi";
import { MdBorderColor } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
function AdminLayout() {
     const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return (
    <div>
       <div className="flex min-h-screen">
    
      <div className="w-64 bg-pink-100 p-5">
        <h1 className="text-[32px] font-bold mb-8 text-[#8b5d6a]">Admin Panel</h1>

        <nav className="flex flex-col gap-4 text-[#8b5d6a] font-bold">
         
          <Link to="/admin/products" className="hover:text-pink-600 flex gap-2 text-[18px]"><PiFlowerTulipBold className='text-[20px] mt-[2px]' />Products</Link>
          <Link to="/admin/orders" className="hover:text-pink-600 flex gap-2 text-[18px]"><MdBorderColor className='text-[20px] mt-[2px]' />Orders</Link>
          <Link to="/admin/messages" className="hover:text-pink-600 flex gap-2 text-[18px]"><LuMessageSquareMore className='text-[20px] mt-[5px]'/> Messages</Link>
        </nav>
      </div>

      <div className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </div>

    </div>
    </div>
  )
}

export default AdminLayout
