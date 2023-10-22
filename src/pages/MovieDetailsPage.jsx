import { useParams } from "react-router-dom";
import axios, { API_KEY } from "../api/axios";
import { useQuery } from "@tanstack/react-query";
import placeholder from '@images/placeholder.jpg'

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
      <h2>MovieDetailsPage</h2>
      {isLoading ? <p>Ładowanie....</p> : null}
      {isError ? <p>Wystąpił błąd</p> : null}
      {data ? (
        <div>
          <p>Title: {enpointKey == "movie" ? data.title : data.name}</p>
          <img
            src={data['poster_path']?`https://image.tmdb.org/t/p/w200${data['poster_path']}`:placeholder}
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
