import MoviesListDataLogic from "../components/MoviesListDataLogic";

const TopRatedMoviesList = () => {
  return (
    <div className="list-container">
      <h2>Top Rated Movies List</h2>
      <MoviesListDataLogic
        endpointLink="/movie/top_rated"
        queryKey="topRatedMovies"
      />
    </div>
  );
};

export default TopRatedMoviesList;
