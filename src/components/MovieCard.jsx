function MovieCard({ movie, toggleFavourite }) {
    return (
      <div className="movie-card">
        <span>{movie.title}</span>
        <button onClick={() => toggleFavourite(movie.id)}>
          {movie.favourite ? "❤️" : "🤍"}
        </button>
      </div>
    );
  }
  
  export default MovieCard;
  