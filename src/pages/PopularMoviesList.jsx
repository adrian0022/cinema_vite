import MoviesListDataLogic from "../components/MoviesListDataLogic.jsx";

const PopularMoviesList = () => {
  return (
    <div className="list-container content-wrapper">
      <h2>Popular Movies List</h2>
      <MoviesListDataLogic
        endpointLink="/movie/popular"
        queryKey="popularMovies"
      />
    </div>
  );
};

export default PopularMoviesList;
