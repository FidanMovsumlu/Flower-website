import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 8)));
  }, []);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  useEffect(() => {
    if (index > products.length - visibleCount) {
      setIndex(0);
    }
  }, [visibleCount, products]);

  const nextSlide = () => {
    if (index < products.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className=" mt-10 flex items-center gap-2">

      <button
        onClick={prevSlide}
        className="bg-gray-200 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
      >
        <IoIosArrowBack />
      </button>

      
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 p-1.5"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="bg-white rounded-xl shadow p-2">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[400px] sm:h-[300px] object-cover rounded"
                />

                <p className="mt-2 text-sm sm:text-base">
                  {item.name}
                </p>

                <p className="text-red-500 text-sm">
                  {item.price}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

      
      <button
        onClick={nextSlide}
        className="bg-gray-200 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
      >
        <IoIosArrowForward />
      </button>

    </div>
  );
};

export default Slider;