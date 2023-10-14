import MovieListItem from "./MovieListItem";

const MoviesList = ({ moviesList, resourceType }) => {
  return (
    <ul className="movies-list">
      {moviesList.map((movie) => {
        return (
          <MovieListItem
            key={movie.id}
            id={movie.id}
            title={resourceType == "movie" ? movie.title : movie.name}
            poster={movie.poster_path}
            voteAvg={movie.vote_average}
            resourceType={resourceType}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
