import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios, { API_KEY } from "../api/axios";
import Pagination from "./Pagination";
import MoviesList from "./MoviesList";
import RequestLoader from "./RequestStates/RequestLoader";
import RequestError from "./RequestStates/RequestError";

const MoviesListDataLogic = ({
  endpointLink,
  queryKey,
  resourceType = "movie",
}) => {
  const [activePage, setActivePage] = useState(1);

  const handleSatActivePage = (pageNumber) => {
    if (typeof pageNumber === "number" && pageNumber !== activePage) {
      setActivePage(pageNumber);
    }
  };

  const getData = async () => {
    const response = await axios.get(
      `${endpointLink}?language=en-US&page=${activePage}&api_key=${API_KEY}`
    );

    return response.data;
  };

  const { data, isLoading, isError } = useQuery(
    [`${queryKey}_${activePage}`],
    getData
  );
  console.log(data);

  return (
    <>
      {isLoading ? <RequestLoader /> : null}
      {isError ? <RequestError /> : null}
      {data?.results ? (
        <>
          <MoviesList moviesList={data.results} resourceType={resourceType} />
          <Pagination
            activePage={activePage}
            setActivePage={handleSatActivePage}
            totalPages={data?.["total_pages"] > 99 ? 99 : data["total_pages"]}
          />
        </>
      ) : null}
    </>
  );
};

export default MoviesListDataLogic;
