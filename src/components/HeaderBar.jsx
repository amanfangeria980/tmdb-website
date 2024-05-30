import React, { useState, useEffect } from "react";
import MovieScrollBar from "./MovieScrollBar";

const HeaderBar = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [data, setData] = useState(null);

  const fetchData = async (option) => {
    const selectedOptionData = options.find((opt) => opt.value === option);
    if (!selectedOptionData) return;

    const { value, apiUrl } = selectedOptionData;

    try {
      const response = await fetch(
        `${apiUrl}?api_key=${import.meta.env.VITE_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching ${value} data: ${response.statusText}`);
      }
      const responseData = await response.json();
      setData(responseData);
      console.log(`${value} data:`, responseData);
    } catch (error) {
      console.error(`Error fetching ${value} data:`, error);
    }
  };

  useEffect(() => {
    fetchData(selectedOption);
    console.log(data);
    console.log("Hello");
  }, [selectedOption]);

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
