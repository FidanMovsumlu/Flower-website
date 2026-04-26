import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  const visibleCount = 5;

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 8)));
  }, []);

  const nextSlide = () => {
    if (index + visibleCount < products.length) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-[90%] m-auto mt-10 flex items-center gap-2">

      <button
        onClick={prevSlide}
        className="bg-gray-200 hover:bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center text-xl"
      >
       <IoIosArrowBack/>
      </button>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="w-1/5 p-3 flex-shrink-0"
            >
              <div className="bg-white shadow-md rounded-2xl p-2 text-center">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[280px] object-cover rounded-xl"
                />

                <h3 className="mt-2 font-semibold">{item.name}</h3>
                <p className="text-red-500">{item.price}</p>

              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="bg-gray-200 hover:bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center text-xl"
      >
        <IoIosArrowForward/>
      </button>

    </div>
  );
};

export default Slider;