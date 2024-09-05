import React from "react";

const SearchNav = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-5 py-3 bg-white rounded-lg shadow-lg">
        <div className="flex items-center">
          <i className="bx bx-search text-xl text-gray-400"></i>
          <input
            className="ml-2 outline-none bg-transparent"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center border rounded-sm space-x-2 font-medium">
            <button className="flex items-center bg-gray-200 px-2 text-sm py-1 text-gray-700 hover:bg-gray-300 focus:outline-none">
              <i className="bx bx-star text-lg"></i>
              <span className="ml-1">Star</span>
            </button>
            <span className="font-semibold text-gray-700 text-sm pr-2">945</span>
          </div>
          <div className="flex items-center relative">
            <img
              src="/assets/img/avatars/1.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full relative"
            />
            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-[4%] top-[70%] border-2 border-white"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SearchNav;
