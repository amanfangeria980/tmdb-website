import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import MovieScrollBar from "./MovieScrollBar";

const HeaderBar = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const data = useFetchData(
    options.find((opt) => opt.value === selectedOption).apiUrl
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="flex items-center m-8">
        <h2 className="text-xl font-semibold mr-5">Trending</h2>
        <div className="relative w-56 p-1 bg-white rounded-full border border-black">
          <div
            className={`absolute top-0 w-1/2 h-full bg-orange-500 rounded-full transition-transform duration-500 ${
              selectedOption === "today"
                ? "transform translate-x-0"
                : "transform translate-x-full"
            }`}
          ></div>
          {options.map((option) => (
            <button
              key={option.value}
              className={`relative z-10 w-1/2 p-2 text-center bg-transparent outline-none focus:outline-none ${
                selectedOption === option.value ? "text-white" : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        {data ? <MovieScrollBar data={data.results} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default HeaderBar;
