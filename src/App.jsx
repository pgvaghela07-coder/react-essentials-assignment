import { useState } from "react";
import PortfolioCard from "./components/PortfolioCard";
import MovieCard from "./components/MovieCard";
import moviesData from "./data/movies";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(moviesData);

  const toggleFavourite = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, favourite: !movie.favourite }
          : movie
      )
    );
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <PortfolioCard />

      <div className="movie-section">
        <h2>Movie Explorer</h2>

        <input
          className="search-input"
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredMovies.length === 0 ? (
          <p className="empty">No movies found</p>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleFavourite={toggleFavourite}
            />
          ))
        )}

        <h3>Favourite Movies</h3>
        <div className="favourites">
          {movies.filter(m => m.favourite).length === 0
            ? "No favourites yet"
            : movies
                .filter(m => m.favourite)
                .map(m => <span key={m.id}>{m.title}</span>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
