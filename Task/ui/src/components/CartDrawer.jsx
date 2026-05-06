import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaTrashCan } from "react-icons/fa6";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setCartOpen,
    removeFromCart,
    increase,
    decrease,
    totalPrice,
  } = useCart();

const [showCheckout, setShowCheckout] = useState(false);
const [error, setError] = useState("");
const [submitted, setSubmitted] = useState(false);
const [form, setForm] = useState({
  name: "",
  email: "",
  address: "",
  date: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
});
const handleConfirm = () => {
  setSubmitted(true);

  const isEmpty = Object.values(form).some((val) => !val);

  if (isEmpty) {
    setError("Please fill in all information!");
    return;
  }

  const newOrder = {
    id: Date.now(),
    name: form.name,
    email: form.email,
    address: form.address,
    date: form.date,
    cardNumber: form.cardNumber,
    expiry: form.expiry,
    cvv: form.cvv,
    cart: cart,
    total: totalPrice,
     status: "Pending",
  };

  const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
  localStorage.setItem("orders", JSON.stringify([...oldOrders, newOrder]));

 

  setForm({
    name: "",
    email: "",
    address: "",
    date: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  setShowCheckout(false);
  setSubmitted(false);
  toast.success('Sifarişiniz uğurla qəbul olundu 🛍️', {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
};
  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setCartOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[40%] bg-[#efe4ea] shadow-lg transform transition-transform duration-300 z-50 flex flex-col
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between border-b-2 border-[#f45da4]">
          <h2 className="text-[30px] font-bold text-[#f45da4]">Səbət</h2>

          <button
            onClick={() => setCartOpen(false)}
            className="text-[#f45da4] text-[18px] cursor-pointer"
          >
            X
          </button>

        </div>

        <div className="p-4 flex-1 overflow-y-aut">
          {cart.length === 0 ? (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
              <div className="w-[80px] h-[80px] rounded-full border-2 border-[#f45da4] flex items-center justify-center text-[#f45da4] text-2xl font-bold">
                i
              </div>

              <p className="mt-4 text-gray-500 text-lg">No products found</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 mb-10 pb-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[100px] h-[100px] object-cover rounded"
                  />

                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-[#875d69] font-bold">{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2 bg-[#c9b6bb] px-2 border-2 border-[#734f59] rounded-[20px]">
                  <button
                    onClick={() => decrease(item.id)}
                    className="font-bold"
                  >
                    -
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    onClick={() => increase(item.id)}
                    className="font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className=" font-bold text-[20px] cursor-pointer text-[#f45da4]"
                >
                  <FaTrashCan />
                </button>
               
              </div>
            ))
          )}
        </div>
         <div className="p-4 mt-4 ">
                  <h3 className="text-[25px] font-bold text-[#f45da4]">
                    Total : {totalPrice} ₼
                  </h3>
                </div>
               
               <div className="p-4 text-center">
  <button
  onClick={() => setShowCheckout(true)}
  className="w-[50%] bg-[#875d69] text-white py-3 rounded-lg font-semibold hover:bg-[#6e4a54] transition cursor-pointer"
>
  Complete the order
</button>
</div>
      </div>


     {showCheckout && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100]">

    <div className="bg-[#efe4ea] border-2 border-[#f45da4] rounded-2xl w-[420px] p-6 shadow-2xl">

      <h2 className="text-[22px] font-bold text-[#f45da4] mb-4 text-center">
        Payment Information
      </h2>
{submitted && error && (
  <p className="text-red-500 text-center mb-3 font-medium">
    {error}
  </p>
)}
     
      <input
        placeholder="Ad Soyad"
        className="border border-[#875d69] p-2 w-full mb-2 rounded-lg"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      
      <input
        placeholder="E-poçt"
        className="border border-[#875d69] p-2 w-full mb-2 rounded-lg"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      
      <input
        placeholder="Çatdırılma ünvanı"
        className="border border-[#875d69] p-2 w-full mb-2 rounded-lg"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

    
      <input
        type="date"
        className="border border-[#875d69] p-2 w-full mb-2 rounded-lg"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      
      <input
  placeholder="Card Number"
  value={form.cardNumber}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 16);

    setForm({ ...form, cardNumber: value });
  }}
  className="border p-2 w-full mb-2 rounded-lg"
/>

      <div className="flex gap-2">
        <input
  placeholder="MM/YY"
  value={form.expiry}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 4);

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    setForm({ ...form, expiry: value });
  }}
  className="border p-2 w-full mb-2 rounded-lg"
/>
        <input
  placeholder="CVV"
  value={form.cvv}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 3);

    setForm({ ...form, cvv: value });
  }}
  className="border p-2 w-full mb-2 rounded-lg"
/>
      </div>

     
      <div className="flex gap-2 mt-5">

        <button
          className="w-full bg-[#875d69] text-white py-2 rounded-lg hover:bg-[#6e4a54] transition"
            onClick={handleConfirm}
        >
          Confirm
        </button>

        <button
          className="w-full bg-gray-400 text-white py-2 rounded-lg"
          onClick={() => setShowCheckout(false)}
        >
         Cancel
        </button>

      </div>

    </div>
  </div>
)}
<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover={false}
theme="light"
transition={Bounce}
/>
    </>
  );
}

export default CartDrawer;
