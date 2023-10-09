import { Route, Routes } from "react-router-dom";
import MainViewContainer from "./pages/MainViewContainer";
import PopularMoviesList from "./pages/PopularMoviesList";
import TopRatedMoviesList from "./pages/TopRatedMoviesList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import UpcomingMoviesList from "./pages/UpcomingMoviesList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainViewContainer />}>
            <Route index element={<PopularMoviesList />} />
            <Route path="/topRated" element={<TopRatedMoviesList />} />
            <Route path="/upcoming" element={<UpcomingMoviesList />} />
            <Route
              path="/movieDetails/:movieId"
              element={<MovieDetailsPage />}
            />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
