import MoviesListDataLogic from "../components/MoviesListDataLogic";

const TopRatedSeriesList = () => {
  return (
    <div className="list-container content-wrapper">
      <h2>Top Rated TV Series</h2>
      <MoviesListDataLogic
        endpointLink="/tv/top_rated"
        queryKey="topRatedSeries"
        resourceType="tv"
      />
    </div>
  );
};

export default TopRatedSeriesList;
