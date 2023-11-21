import React from "react";
import { useParams } from "react-router-dom";
import axios, { API_KEY } from "../api/axios";
import { useQuery } from "@tanstack/react-query";
import placeholder from "@images/placeholder.jpg";
import RequestLoader from "../components/RequestStates/RequestLoader";
import RequestError from "../components/RequestStates/RequestError";
import ActorList from "./ActorList";
import ToggleFavorite from "../components/ToggleFavorite";
import { useAuth } from "../components/AuthContext";

const MovieDetailsPage = ({ enpointKey }) => {
  const { Id } = useParams();

  const getMovieDetails = async () => {
    const response = await axios.get(
      `/${enpointKey}/${Id}?language=en-US&api_key=${API_KEY}`
    );

    const creditsResponse = await axios.get(
      `/${enpointKey}/${Id}/credits?language=en-US&api_key=${API_KEY}`
    );

    const castList = creditsResponse.data.cast.slice(0, 12);

    const trailerResponse = await axios.get(
      `/${enpointKey}/${Id}/videos?language=en-US&api_key=${API_KEY}`
    );

    const trailerKey = trailerResponse.data.results[0]?.key;

    return { ...response.data, trailerKey, castList };
  };

  const { user } = useAuth(); // Dodaj userID

  const { data, isLoading, isError } = useQuery(
    [enpointKey + "Details" + Id],
    getMovieDetails
  );

  return (
    <>
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${
            data && data.backdrop_path
              ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
              : ""
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="movie-details content-wrapper">
          {isLoading ? <RequestLoader /> : null}
          {isError ? <RequestError /> : null}
          {data ? (
            <div className="movie-info">
              <img
                src={
                  data["poster_path"]
                    ? `https://image.tmdb.org/t/p/w500${data["poster_path"]}`
                    : placeholder
                }
                alt={data.title + " poster"}
                className="movie-avatar"
              />
              {data.trailerKey && (
                <div className="trailer">
                  <iframe
                    title={`${data.title} Trailer`}
                    src={`https://www.youtube.com/embed/${data.trailerKey}?&controls=1`}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="details-content">
                <h1>{enpointKey === "movie" ? data.title : data.name}</h1>
                {user ? (
                  <>
                    <ToggleFavorite
                      videoId={data?.["id"]}
                      title={enpointKey === "movie" ? data.title : data.name}
                      resourceType={enpointKey}
                      posterPath={data?.["poster_path"]}
                    />
                  </>
                ) : (
                  <></>
                )}
                <p>
                  Rating: {data.vote_average.toFixed(2)} / 10 || Total number of
                  reviews: ({data.vote_count})
                </p>
                <p>Overview: {data.overview}</p>
                <p>
                  Year:{" "}
                  {enpointKey === "movie"
                    ? data.release_date.slice(0, 4)
                    : data.first_air_date.slice(0, 4)}
                </p>
                <p>
                  Genres: {data.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                  Duration:{" "}
                  {enpointKey === "movie"
                    ? `${data.runtime} min`
                    : `${data.episode_run_time[0]} min`}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {data?.castList ? <ActorList actors={data.castList} /> : null}
    </>
  );
};

export default MovieDetailsPage;
