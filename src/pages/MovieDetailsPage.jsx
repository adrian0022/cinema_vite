import { useParams } from "react-router-dom";
import axios, { API_KEY } from "../api/axios";
import { useQuery } from "@tanstack/react-query";

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
    <div>
      <h2>MovieDetailsPage</h2>
      {isLoading ? <p>Ładowanie....</p> : null}
      {isError ? <p>Wystąpił błąd</p> : null}
      {data ? (
        <div>
          <p>Title: {enpointKey == "movie" ? data.title : data.name}</p>
          <img
            src={"https://image.tmdb.org/t/p/w200" + data.poster_path}
            alt=""
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
