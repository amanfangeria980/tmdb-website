/* eslint-disable react/prop-types */
import { formatDate } from "./../../utils";
import { NavLink } from "react-router-dom";
import { IoOptionsOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
// import ProgressCircle from "./ProgressCircle";
const ShowCard = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  director,
  first_air_date,
  genres,
  name,
  media_type,
}) => {
  const imageUrl = `https://media.themoviedb.org/t/p/original${poster_path}`;

  return (
    <div className="flex px-[120px] items-center gap-6 h-full">
      <div
        key={id}
        className=" flex flex-col  w-[25%]  rounded-lg  shadow-sm shadow-zinc-300-500 h-[90%] bg-gradient-to-r from-[#30BBCE] to-[#06B4E6] overflow-hidden hover:from-[#2E9DC4] hover:to-[#0597C2]"
      >
        <img
          className="w-full h-[90%] object-cover"
          src={imageUrl}
          alt={title || name}
        />

        <div className="px-4 py-2 flex-1 flex flex-col justify-between">
          <div className="font-bold text-md mb-1 overflow-hidden">
            <p className="text-white truncate">{title || name}</p>
          </div>
          <p className="text-gray-200 text-sm">
            <span className="whitespace-normal break-all">
              {release_date
                ? formatDate(release_date)
                : formatDate(first_air_date)}
            </span>
          </p>
        </div>
      </div>
      <div className="w-[80%] gap-4 flex flex-col">
        <div className="flex gap-2">
          <div className="text-white text-[35px] font-[700]">{title}</div>
          <div className="text-[#DACFCD] text-[35px]">({release_date})</div>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="border border-white text-white rounded-md text-[16px]">
            PG-13
          </div>
          <div className="text-white text-[18px]">({release_date})</div>
          <div className="text-white text-[18px]">
            {/* {genres.map((genre, index) => (
              <div key={index}>{genre.name}</div>
            ))} */}
            Scince fiction
          </div>
          <div className="text-white text-[18px]">4hrs 47min</div>
        </div>
        <div className="flex gap-[10px] items-center">
          {/* <ProgressCircle percentage={80} /> */}
          <div className="flex text-white font-[700] flex-col">
            USER <p>SCORE</p>
          </div>
          <div className="flex ">
            <div className="text-[30px]">🤯</div>
            <div className="text-[30px]">😍</div>
            <div className="text-[30px]">🙂</div>
          </div>
          <div className="bg-[#032541] gap-[5px] px-[10px] py-[5px] flex rounded-full text-white text-[18px] font-[600] items-center">
            whats your vibe
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
            className="bg-[#032541] text-[15px]  h-[40px] text-white w-[40px] flex items-center 
          justify-center font-[900] rounded-full"
          >
            <IoOptionsOutline />
          </div>
          <div
            className="bg-[#032541] text-[15px]  h-[40px] text-white w-[40px] flex items-center 
          justify-center font-[900] rounded-full"
          >
            <FaHeart />
          </div>
          <div
            className="bg-[#032541] text-[15px]  h-[40px] text-white w-[40px] flex items-center 
          justify-center font-[900] rounded-full"
          >
            <FaBookmark />
          </div>
          <div className="text-white flex items-center gap-2 font-[600]">
            {" "}
            <FaPlay />
            Play Trailer
          </div>
        </div>
        <div className="font-[600] text-[18px] text-[#DACFCD]">
          Long live the fighters.
        </div>
        <div className="text-white font-[700] text-[25px]">Overview</div>
        <div className="text-white text-[15px]">
          Follow the mythic journey of Paul Atreides as he unites with Chani and
          the Fremen while on a path of revenge against the conspirators who
          destroyed his family. Facing a choice between the love of his life and
          the fate of the known universe, Paul endeavors to prevent a terrible
          future only he can foresee.
        </div>
        <div className="flex items-center justify-between w-[70%]">
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
