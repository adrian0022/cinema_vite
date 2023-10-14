import MoviesListDataLogic from "../components/MoviesListDataLogic";

const PopularTvSeriesList = () => {
  return (
    <div className="list-container content-wrapper">
      <h2>Popular TV Series List</h2>
      <MoviesListDataLogic
        endpointLink="/tv/popular"
        queryKey="PopularSeriesList"
        resourceType="tv"
      />
    </div>
  );
};

export default PopularTvSeriesList;
