/* eslint-disable react/prop-types */
import { formatDate } from "./../../utils";
import { NavLink } from "react-router-dom";
const ShowCard = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  first_air_date,
  name,
  media_type,
}) => {
  const imageUrl = `https://media.themoviedb.org/t/p/original${poster_path}`;

  return (
    <div className="flex justify-between">
      <div
        key={id}
        className="absolute top-16 left-20 w-80 h-100 rounded-lg overflow-hidden shadow-sm shadow-zinc-300-500 m-2 flex flex-col min-h-[350px] min-w-[200px] bg-gradient-to-r from-[#30BBCE] to-[#06B4E6] hover:from-[#2E9DC4] hover:to-[#0597C2]"
      >
        <img
          className="w-full h-2/3 object-cover"
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
      {/* <div className="">
        <div>
          <span className="font-bold text-white">{title}</span>
        </div>
      </div> */}
    </div>
  );
};

export default ShowCard;
