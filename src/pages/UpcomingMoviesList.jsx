import MoviesListDataLogic from "../components/MoviesListDataLogic";

const UpcomingMoviesList = () => {
  return (
    <div className="list-container content-wrapper">
      <h2>Upcoming Movies List</h2>
      <MoviesListDataLogic
        endpointLink="/movie/upcoming"
        queryKey="upcomingMovies"
      />
    </div>
  );
};

export default UpcomingMoviesList;
