import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../components/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import HeartIcon from "../assets/icons/HeartIcon";
import HeartAddIcon from "../assets/icons/HeartAddIcon";

const ToggleFavorite = ({ videoId, title, resourceType, posterPath }) => {
  const { userID } = useAuth();
  const queryClient = useQueryClient();
  const [isFavorite, setIsFavorite] = useState(false);

  const { data: isOnList } = useQuery(
    [`${userID}_${videoId}_isOnList`],
    async () => {
      const response = await axios.post("http://localhost:3200/isOnList", {
        userId: userID,
        videoId: videoId,
      });

      return response.data?.isOnList ?? false;
    }
  );

  useEffect(() => {
    setIsFavorite(isOnList);
  }, [isOnList]);

  const { mutate: addToList } = useMutation(
    async (data) => await axios.post("http://localhost:3200/addToList", data),
    {
      onSuccess: () => {
        setIsFavorite(true);
        queryClient.invalidateQueries([`${userID}_favorites`]);
      },
    }
  );

  const { mutate: deleteFromList } = useMutation(
    async ({ userId, videoId }) =>
      await axios.post("http://localhost:3200/deleteFromList", {
        userId,
        videoId,
      }),
    {
      onSuccess: () => {
        setIsFavorite(false);
        queryClient.invalidateQueries([`${userID}_${videoId}_isOnList`]);
      },
    }
  );

  const addToFavorites = async () => {
    try {
      await addToList({
        userId: userID,
        videoId: videoId?.toString(),
        title: title ?? "",
        posterPath: posterPath ?? "",
        resourceType: resourceType ?? "movie",
      });
      console.log("Added to favorites!");
    } catch (error) {
      console.error("Error adding to favorites", error);
    }
  };

  const removeFromFavorites = async () => {
    try {
      await deleteFromList({
        userId: userID,
        videoId: videoId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={isFavorite ? removeFromFavorites : addToFavorites}>
      {isFavorite ? (
        <>
          <HeartIcon /> <span>Your favourite, remove on Click </span>
        </>
      ) : (
        <>
          <HeartAddIcon /> <span>Add to Favorites</span>
        </>
      )}
    </button>
  );
};

export default ToggleFavorite;