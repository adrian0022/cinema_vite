import MoviesListDataLogic from "../components/MoviesListDataLogic";

const NowPlayingMoviesList = () => {
  return (
    <div className="list-container content-wrapper">
      <h2>Now Playing Movies List</h2>
      <MoviesListDataLogic
        endpointLink="/movie/now_playing"
        queryKey="nowPlayingMovies"
      />
    </div>
  );
};

export default NowPlayingMoviesList;
