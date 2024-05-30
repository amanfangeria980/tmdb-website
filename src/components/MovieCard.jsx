import React from "react";
import { formatDate } from "./../../utils";
import { NavLink } from "react-router-dom";
const MovieCard = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  first_air_date,
  name,
  media_type,
}) => {
  const imageUrl = `https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;

  return (
    <NavLink to={media_type === "movie" ? `/movie/${id}` : `tv/${id}`}>
      <div
        key={id}
        className="w-56 h-100 rounded-lg overflow-hidden shadow-lg m-4 flex flex-col relative min-h-[350px] min-w-[250px]"
      >
        {/* Movie poster */}
        <img
          className="w-full h-2/3 object-cover"
          src={imageUrl}
          alt={title || name}
        />
        {/* Rating circle */}
        <div className="absolute bottom-15 left-2 bg-green-400 text-white rounded-full flex items-center justify-center w-8 h-8">
          {Math.round(vote_average * 10, 1) + "%"}
        </div>
        <div className="px-4 py-2 flex-1 flex flex-col justify-between">
          <div className="font-bold text-md mb-1 overflow-hidden">
            {/* Using ellipsis to truncate long titles */}
            <p className="text-gray-900 truncate">{title || name}</p>
          </div>
          <p className="text-gray-700 text-sm">
            {/* Using word-wrap and overflow to handle long content */}
            <span className="whitespace-normal break-all">
              {release_date
                ? formatDate(release_date)
                : formatDate(first_air_date)}
            </span>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
