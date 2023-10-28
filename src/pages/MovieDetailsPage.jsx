import { useParams } from "react-router-dom";
import axios, { API_KEY } from "../api/axios";
import { useQuery } from "@tanstack/react-query";
import placeholder from "@images/placeholder.jpg";
import LoadingPage from "../components/RequestStates/RequestLoader";
import LoaderPage from "../components/RequestStates/RequestLoader";
import RequestLoader from "../components/RequestStates/RequestLoader";
import RequestError from "../components/RequestStates/RequestError";

const MovieDetailsPage = ({ enpointKey }) => {
  const { Id } = useParams();

  const getMovieDetails = async () => {
    const response = await axios.get(
      `/${enpointKey}/${Id}?language=en-US&api_key=${API_KEY}`
    );

    return response.data;
  };

  const { data, isLoading, isError } = useQuery(
    [enpointKey + "Details" + Id],
    getMovieDetails
  );
  console.log(data);

  return (
    <div className="movie-details content-wrapper">
      {isLoading ? <RequestLoader /> : null}
      {isError ? <RequestError /> : null}
      {data ? (
        <div>
          <p>Title: {enpointKey == "movie" ? data.title : data.name}</p>
          <img
            src={
              data["poster_path"]
                ? `https://image.tmdb.org/t/p/w300${data["poster_path"]}`
                : placeholder
            }
            alt={data.title + " poster"}
          />
          <p>
            {data.vote_average} / 10 ({data.vote_count})
          </p>
          <p>Overview: {data.overview}</p>
        </div>
      ) : null}
    </div>
  );
};

export default MovieDetailsPage;
