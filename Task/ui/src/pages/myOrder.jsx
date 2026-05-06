import React from "react";

function MyOrder({ open, setOpen }) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-[100]">

          
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          ></div>

         
          <div className="absolute right-0 top-0 h-full w-[400px] bg-white shadow-lg p-5 overflow-y-auto animate-slideIn">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[25px] font-bold text-[#f45da4]">
                My Orders
              </h2>

              <button onClick={() => setOpen(false)} className="cursor-pointer text-[#f45da4] font-bold ">
                ✕
              </button>
            </div>

            {orders.length ? (
              orders.map((order) => (
                <div key={order.id} className="border-2 p-3 mb-4 rounded-lg border-[#f45da4]">

                  <p className="font-bold">Total: {order.total} ₼</p>

                  <p>
                    Status:{" "}
                    <span
                      className={
                        order.status === "Pending"
                          ? "text-yellow-500"
                          : order.status === "Delivered"
                          ? "text-green-600"
                          : "text-red-500"
                      }
                    >
                      {order.status}
                    </span>
                  </p>

                  <div className="mt-2 text-sm text-gray-600">
                    {order.cart.map((item) => (
                      <p key={item.id}>
                        {item.name} x {item.quantity}
                      </p>
                    ))}
                  </div>

                </div>
              ))
            ) : (
              <p>No orders yet</p>
            )}

          </div>
        </div>
      )}
    </>
  );
}

export default MyOrder;