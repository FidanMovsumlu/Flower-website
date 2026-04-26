const Navbar2 = ({ activeCategory, setActiveCategory, setSortOrder}) => {
  const categories = [ "flower", "plant", "accessories"];

  return (
    <div className="p-4 pt-[10px] flex flex-col gap-4 ">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-5 py-2 rounded-full capitalize 
            ${
              activeCategory === cat
                ? "bg-pink-500 text-white font-bold"
                : "text-pink-500 border border-pink-500 hover:bg-pink-100"
            }`}
        >
          {cat}
        </button>
      ))}

      <div className="mt-[50px] bg-[#efe1e9] p-4 rounded-xl shadow-md border-pink-400 border-2">
  <h2 className="text-lg text-pink-500 font-bold mb-2 border-b-2 pb-2">
    FILTER
  </h2>
  <div className="flex flex-col gap-2 mt-3">

    <button
      onClick={() => setSortOrder("low-high")}
      className="bg-gray-100 hover:bg-pink-200 px-3 py-2 rounded-lg text-sm font-bold text-pink-600"
    >
      Lowest Price ↑
    </button>

    <button
      onClick={() => setSortOrder("high-low")}
      className="bg-gray-100 hover:bg-pink-200 px-3 py-2 rounded-lg text-sm font-bold text-pink-600"
    >
      Highest Price ↓
    </button>

  </div>
</div>
    </div>

  );
};

export default Navbar2;