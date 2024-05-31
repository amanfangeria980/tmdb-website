import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "./../hooks/useFetchData";

const ShowPage = ({ type }) => {
  const params = useParams();
  console.log(type);
  console.log(params);

  let apiUrl =
    type === "movie"
      ? `https://api.themoviedb.org/3/movie/${params.movieId}`
      : `https://api.themoviedb.org/3/tv/${params.tvId}`;

  const data = useFetchData(apiUrl);
  console.log("Fetched data:", data);

  // Check if data exists and backdrop_path is not null or undefined
  const backdropUrl = data?.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${data?.backdrop_path}`
    : null;

  console.log("Backdrop URL:", backdropUrl);

  return (
    <div>
      <span>
        {/* {data ? (
          <div>
            <h1>{data.title || data.name}</h1>
          </div>
        ) : (
          <div>Loading...</div>
        )} */}
      </span>
      <div className="bg-right bg-[#050505] bg-contain bg-no-repeat h-[70vh] w-full">
        <img
          src={`https://media.themoviedb.org/t/p/original${data?.backdrop_path}`}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ShowPage;
