import { Link } from "react-router-dom";
import MovieCard from "./../components/MovieCard";

const Favourites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  console.log(favorites);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Favourites</h1>
      <div className="grid grid-cols-3 gap-4">
        {favorites.map((favorite) => (
          <MovieCard key={favorite.id} {...favorite} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
