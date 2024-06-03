/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { formatDate, formatRuntime } from "./../../utils";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import ProgressCircle from "./ProgressCircle";

const ShowCard = ({ obj }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setIsFavorite(favorites.some((item) => item.id === obj.id));
    setIsBookmarked(bookmarks.some((item) => item.id === obj.id));
  }, [obj]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = isFavorite
      ? favorites.filter((item) => item.id !== obj.id)
      : [...favorites, obj];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const updatedBookmarks = isBookmarked
      ? bookmarks.filter((item) => item.id !== obj.id)
      : [...bookmarks, obj];
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  const imageUrl = `https://media.themoviedb.org/t/p/original${obj.poster_path}`;
  const genreNames = obj.genres.map((genre) => genre.name).join(", ");

  return (
    <div className="flex px-[120px] items-center gap-6 h-full">
      <div
        key={obj.id}
        className=" flex flex-col  w-[25%]  rounded-lg  shadow-sm shadow-zinc-300-500 h-[90%] bg-gradient-to-r from-[#30BBCE] to-[#06B4E6] overflow-hidden hover:from-[#2E9DC4] hover:to-[#0597C2]"
      >
        <img
          className="w-full h-[90%] object-cover"
          src={imageUrl}
          alt={obj.title || obj.name}
        />

        <div className="px-4 py-2 flex-1 flex flex-col justify-between">
          <div className="font-bold text-md mb-1 overflow-hidden">
            <p className="text-white truncate text-center">
              Watch Now on Apple!
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] gap-4 flex flex-col">
        <div className="flex gap-2">
          <div className="text-white text-[35px] font-[700]">
            {obj.title || obj.name}
          </div>
          <div className="text-[#DACFCD] text-[35px]">
            ({(obj.release_date || obj.first_air_date)?.substring(0, 4)})
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="border border-white text-white rounded-md text-[16px] p-1">
            PG-13
          </div>
          <div className="text-white text-[18px]">
            {formatDate(obj.release_date || obj.first_air_date)}
          </div>
          <div className="text-white text-[18px]">
            {genreNames}
            {obj.runtime ? (
              <span className="ml-2 text-white text-[18px]">
                {formatRuntime(obj.runtime)}
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="flex text-white font-[700] flex-col">
            <ProgressCircle percentage={Math.round(obj.vote_average * 10)} />
          </div>
          <div className="flex">
            <div className="text-[30px] hover:scale-150">🤯</div>
            <div className="text-[30px] hover:scale-150">😍</div>
            <div className="text-[30px] hover:scale-150">🙂</div>
          </div>
          <div className="bg-[#032541] gap-[5px] px-[10px] py-[5px] flex rounded-full text-white text-[18px] font-[600] items-center">
            Whats your{" "}
            <span className="underline" style={{ textDecorationColor: "blue" }}>
              vibe!
            </span>
            <div
              className="bg-white text-[15px] h-[18px] text-[#032541] w-[18px] flex items-center 
          justify-center font-[800] rounded-full"
            >
              i
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            className={`bg-[#032541] text-[15px]  h-[40px] w-[40px] flex items-center 
          justify-center font-[900] rounded-full ${
            isFavorite ? "text-red-500" : "text-white"
          }`}
            onClick={toggleFavorite}
          >
            <FaHeart />
          </div>
          <div
            className={`bg-[#032541] text-[15px]  h-[40px] w-[40px] flex items-center 
          justify-center font-[900] rounded-full ${
            isBookmarked ? "text-yellow-500" : "text-white"
          }`}
            onClick={toggleBookmark}
          >
            <FaBookmark />
          </div>
          <div className="text-white flex items-center gap-2 font-[600]">
            <FaPlay />
            Play Trailer
          </div>
        </div>
        {obj.tagline && (
          <div className="font-[600] text-[18px] text-[#DACFCD]">
            {obj.tagline}
          </div>
        )}
        <div className="text-white font-[700] text-[25px]">Overview</div>
        <div className="text-white text-[15px]">{obj.overview}</div>
        <div className="flex items-center justify-between w-[70%]">
          {/* <div>
            <div className="text-white text-[15px] font-[700]">
              Denis Villeneuve
            </div>
            <div className="text-white text-[15px] ">Denis Villeneuve</div>
          </div>
          <div>
            <div className="text-white text-[15px] font-[700]">
              Frank Herbert
            </div>
            <div className="text-white text-[15px] ">Novel</div>
          </div>
          <div>
            <div className="text-white text-[15px] font-[700]">Jon Spaihts</div>
            <div className="text-white text-[15px] ">screen play</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
