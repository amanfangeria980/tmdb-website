import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import MovieScrollBar from "./MovieScrollBar";

const HeaderBar = ({ options, title }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const data = useFetchData(
    options.find((opt) => opt.value === selectedOption).apiUrl
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Calculate the width for each button dynamically
  const buttonWidth = `${100 / options.length}%`;

  return (
    <div className="md:mx-20">
      <div className="flex items-center m-8 flex-row">
        <h2 className="text-xl font-semibold mr-5">{title}</h2>
        <div
          className="relative bg-white rounded-full border border-black flex"
          style={{ width: `${120 * options.length}px` }}
        >
          <div
            className={`absolute top-0 h-full bg-[#032541] rounded-full transition-transform duration-500`}
            style={{
              width: buttonWidth,
              transform: `translateX(${
                options.findIndex((opt) => opt.value === selectedOption) * 100
              }%)`,
            }}
          ></div>
          {options.map((option) => (
            <button
              key={option.value}
              className={`relative z-10 w-full p-2 text-center bg-transparent outline-none focus:outline-none text-[#389788] ${
                selectedOption === option.value ? "text-white" : ""
              }`}
              style={{ width: buttonWidth }}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="">
        {data ? <MovieScrollBar data={data.results} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default HeaderBar;
