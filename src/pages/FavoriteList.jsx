import React from "react";
import axios from "axios";
import placeholder from "@images/placeholder.jpg";
import { useAuth } from "../components/AuthContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import RequestLoader from "../components/RequestStates/RequestLoader";
import RequestError from "../components/RequestStates/RequestError";
import RemoveHeartIcon from "../assets/icons/RemoveHeartIcon";
import { NavLink } from "react-router-dom";
import HeartAddIcon from "../assets/icons/HeartAddIcon";

const FavoriteList = () => {
  const { userID } = useAuth();
  const queryClient = useQueryClient();

  const getFavoritesList = async () => {
    const response = await axios.get(`http://localhost:3200/getList/${userID}`);
    return response.data;
  };

  const {
    data: favoriteList,
    isLoading,
    isError,
  } = useQuery([`${userID}_favorites`], getFavoritesList);

  const { mutate: deleteFromList } = useMutation(
    async ({ userId, videoId }) =>
      await axios.post("http://localhost:3200/deleteFromList", {
        userId,
        videoId,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`${userID}_favorites`]);
      },
    }
  );

  return (
    <div className="list-container content-wrapper">
      <h2>Favorites</h2>
      {isLoading ? <RequestLoader /> : null}
      {isError ? <RequestError /> : null}
      <div className="movies-list">
        {favoriteList && favoriteList.length > 0 ? (
          favoriteList.map((item) => (
            <div className="movie-list-item" key={item.videoId}>
              <img
                src={
                  item.posterPath
                    ? `https://image.tmdb.org/t/p/w500${item.posterPath}`
                    : placeholder
                }
                alt={item.title}
              />
              <p>{item.title}</p>
              <button
                onClick={() =>
                  deleteFromList({ userId: userID, videoId: item.videoId })
                }
              >
                <RemoveHeartIcon /> <span>Remove</span>
              </button>
            </div>
          ))
        ) : (
          <div className="empty-list">
            <h3>Your favorites list is empty.</h3>
            <NavLink to="/" activeClassName="navlink">
              <button>
                <HeartAddIcon /> <span>Add to your list</span>
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteList;
