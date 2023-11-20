import axios from "axios";
import placeholder from "@images/placeholder.jpg";
import { useAuth } from "../components/AuthContext";
import { useQuery } from "@tanstack/react-query";
import RequestLoader from "../components/RequestStates/RequestLoader";
import RequestError from "../components/RequestStates/RequestError";

const FavoriteList = () => {
  const { userID, videoId } = useAuth();

  const getFavoritesList = async () => {
    const response = await axios.get(`http://localhost:3200/getList/${userID}`);
    return response.data;
  };

  const {
    data: favoriteList,
    isLoading,
    isError,
  } = useQuery([`${userID}_favorites`], getFavoritesList);

  return (
    <div className="list-container content-wrapper">
      <h2>Favorites</h2>
      {isLoading ? <RequestLoader /> : null}
      {isError ? <RequestError /> : null}
      <div className="movies-list">
        {favoriteList
          ? favoriteList.map((item) => {
              return (
                <div className="movie-list-item">
                  <img
                    src={
                      item.posterPath
                        ? `https://image.tmdb.org/t/p/w500${item.posterPath}`
                        : placeholder
                    }
                  />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default FavoriteList;
