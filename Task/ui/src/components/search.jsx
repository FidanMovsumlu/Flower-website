import React from "react";
import { IoSearch } from "react-icons/io5";

function Search({ search, setSearch }) {
  return (
    <div className="w-[90%] mr-[50px] text-right mb-[10px]">
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-2 dark:text-white border-pink-500 p-3 rounded-lg w-[250px] outline-none focus:outline-none focus:ring-0"
       
       />
<IoSearch  className="absolute  right-3.5 top-4 text-pink-500 text-[18px]"/>
      </div>

    </div>
  );
}

export default Search;