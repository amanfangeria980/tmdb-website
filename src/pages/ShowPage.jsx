import { useParams } from "react-router-dom";
import useFetchData from "./../hooks/useFetchData";
import ShowCard from "./../components/ShowCard";
import CastScrollbar from "../components/CastScrollBar";

const ShowPage = ({ type }) => {
  const params = useParams();
  // console.log(type);

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

  // console.log("Backdrop URL:", backdropUrl);

  return (
    <div>
      {data ? (
        <div
          className="relative h-[90vh] md:h-[75vh] bg-left-top bg-[length:140%_140%] w-full  "
          style={{
            backgroundImage: `url(https://media.themoviedb.org/t/p/original${data?.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative h-full w-full">
            <ShowCard obj={data} />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <div className="mx-5 font-bold text-xl mt-2">Cast Details: </div>
      <div className="relative mt-4 h-[40vh] mx-4 my-2">
        <CastScrollbar id={params.movieId || params.tvId} media_type={type} />
      </div>
    </div>
  );
};

export default ShowPage;
