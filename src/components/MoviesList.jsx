import MovieListItem from "./MovieListItem";

const MoviesList = ({ moviesList }) => {
  return (
    <ul className="movies-list">
      {moviesList.map((movie) => {
        return (
          <MovieListItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            voteAvg={movie.vote_average}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
