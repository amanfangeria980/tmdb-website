import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faSearch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const NavSearchBar = ({ setIsSearchActive }) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let apiUrl;
      if (searchText === "") {
        apiUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=";
      } else {
        apiUrl = `https://api.themoviedb.org/3/search/multi?query=${searchText}&api_key=`;
      }
      const response = await fetch(`${apiUrl}${import.meta.env.VITE_API_KEY}`);
      const responseData = await response.json();
      setData(responseData.results.splice(0, 10));
      console.log(responseData.results);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching data:`, error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => {
      clearTimeout(timerOut);
    };
  }, [searchText]);

  const handleItemClick = (item) => {
    navigate(
      item.media_type === "movie" ? `/movie/${item.id}` : `/tv/${item.id}`
    );
    setIsSearchActive(false);
  };

  return (
    <div className="absolute w-full bg-white z-30 border-b-gray-200 border">
      <div className="flex items-center justify-center border-b p-2 border-gray-200 md:mx-64">
        <FontAwesomeIcon icon={faSearch} size="xs" />
        <input
          type="text"
          placeholder="Search for a movie, tv show, person..."
          className="w-full ml-4 w-[70%] focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faX}
          color="#757B80"
          size="xs"
          className="p-1 cursor-pointer"
          onClick={() => {
            if (searchText !== "") {
              setSearchText("");
              setLoading(true);
            }
          }}
        />
      </div>
      {searchText === "" ? (
        <div className="bg-[#F7F7F7] p-2">
          <span className="font-bold text-xl md:ml-[262px] ml-[45px]">
            <FontAwesomeIcon icon={faArrowTrendUp} color="black" /> Trending
          </span>
        </div>
      ) : null}

      <div className="p-2 md:ml-[262px] ml-[45px]">
        <ul>
          {data.map((item) => {
            return (
              <li
                key={item.id}
                className="hover:bg-[#F7F7F7] border-b border-gray-200 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                {item.title || item.name}
              </li>
            );
          })}
        </ul>
        {/* Hello */}
        <div className="flex justify-center p-2 w-[70%]">
          {loading && searchText === "" ? (
            <span className="font-bold text-xla text-[#909294] ml-20">
              Loading...
            </span>
          ) : (
            data.length === 0 && (
              <span className="font-bold text-xla text-[#909294] ml-20">
                NO RESULTS
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};
