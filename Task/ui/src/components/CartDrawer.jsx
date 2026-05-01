import { useCart } from "../context/CartContext";

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

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setCartOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[40%] bg-[#efe4ea] shadow-lg transform transition-transform duration-300 z-50
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

        <div className="p-4">
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
                  className=" font-bold text-[18px] cursor-pointer text-[#f45da4]"
                >
                  ✕
                </button>
               
              </div>
            ))
          )}
        </div>
         <div className="p-4 mt-4">
                  <h3 className="text-xl font-bold text-[#f45da4]">
                    Total : {totalPrice} ₼
                  </h3>
                </div>
      </div>
    </>
  );
}

export default CartDrawer;
