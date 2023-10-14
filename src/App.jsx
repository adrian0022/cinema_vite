import { Route, Routes } from "react-router-dom";
import MainViewContainer from "./pages/MainViewContainer";
import PopularMoviesList from "./pages/PopularMoviesList";
import TopRatedMoviesList from "./pages/TopRatedMoviesList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import UpcomingMoviesList from "./pages/UpcomingMoviesList";
import NowPlayingMoviesList from "./pages/NowPlayingMoviesList";
import PopularTvSeriesList from "./pages/PopularTvSeriesList";
import TopRatedSeriesList from "./pages/TopRatedTvSeriesList";
import SearchingResultsList from "./pages/SearchingResultsList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainViewContainer />}>
            <Route index element={<PopularMoviesList />} />
            <Route path="/topRatedMovies" element={<TopRatedMoviesList />} />
            <Route path="/upcomingMovies" element={<UpcomingMoviesList />} />
            <Route
              path="/nowPlayingMovies"
              element={<NowPlayingMoviesList />}
            />
            <Route path="/popularSeries" element={<PopularTvSeriesList />} />
            <Route path="/topRatedSeries" element={<TopRatedSeriesList />} />
            <Route
              path="/movieDetails/:Id"
              element={<MovieDetailsPage enpointKey="movie" />}
            />
            <Route
              path="/tvDetails/:Id"
              element={<MovieDetailsPage enpointKey="tv" />}
            />
            <Route path="/search" element={<SearchingResultsList />} />
          </Route>
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
