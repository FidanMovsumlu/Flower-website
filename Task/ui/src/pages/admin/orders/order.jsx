import React, { useEffect, useState } from "react";

function Order() {
  const [orders, setOrders] = useState([]);
  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order,
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };
  return (
    <div className="p-6">
      <h1 className="text-[40px] font-bold mb-5 text-[#875d69]">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-[#f45da4] text-white">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Products</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id} className="text-center border">
                  <td className="p-2 border">{index + 1}</td>

                  <td className="p-2 border">{order.name}</td>

                  <td className="p-2 border">{order.email}</td>

                  <td className="p-2 border">{order.address}</td>

                  <td className="p-2 border">{order.date}</td>

                  <td className="p-2 border text-left">
                    {order.cart?.map((item) => (
                      <div key={item.id}>
                        {item.name} × {item.quantity}
                      </div>
                    ))}
                  </td>

                  <td className="p-2 border font-bold text-[#875d69]">
                    {order.total} ₼
                  </td>

                  <td className="p-2 border">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className={`
      px-3 py-1 rounded font-semibold text-sm border
      ${
        order.status === "Pending"
          ? "bg-yellow-100 text-yellow-700 border-yellow-400"
          : order.status === "Delivered"
            ? "bg-green-100 text-green-700 border-green-400"
            : "bg-red-100 text-red-700 border-red-400"
      }
    `}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-2 border">
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Order;
