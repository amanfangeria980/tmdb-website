import { useParams } from "react-router-dom";
import useFetchData from "./../hooks/useFetchData";
// import MovieCard from "./../components/MovieCard";
import ShowCard from "./../components/ShowCard";
import CastScrollbar from "../components/CastScrollBar";

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
      {/* <span>
        {data ? (
          <div>
            <h1>{data.title || data.name}</h1>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </span> */}
      <div
        className="relative h-[75vh] bg-left-top bg-[length:140%_140%] w-full  "
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/original${data?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative h-full w-full">
          <ShowCard {...data} />
        </div>
      </div>
      <div className="relative h-[40vh]">
        <CastScrollbar id={params.movieId} />
      </div>
    </div>
  );
};

export default ShowPage;
