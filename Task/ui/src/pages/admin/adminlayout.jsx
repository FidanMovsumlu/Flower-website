import React from 'react'
import { Link, Navigate, Outlet } from "react-router-dom";
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
         
          <Link to="/admin/products" className="hover:text-pink-600">Products</Link>
          <Link to="/admin/orders" className="hover:text-pink-600">Orders</Link>
          <Link to="/admin/messages" className="hover:text-pink-600">Messages</Link>
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
