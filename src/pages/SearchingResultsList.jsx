import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios, { API_KEY } from "../api/axios";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../components/Pagination";
import MoviesList from "../components/MoviesList";

const SearchingResultsList = () => {
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("query"));

  useEffect(() => {
    const query = searchParams.get("query");
    if (searchQuery != query) setSearchQuery(query);
  }, [searchParams]);

  const [activePage, setActivePage] = useState(1);

  const handleSatActivePage = (pageNumber) => {
    if (typeof pageNumber === "number" && pageNumber !== activePage) {
      setActivePage(pageNumber);
    }
  };

  const getData = async () => {
    const response = await axios.get(
      `/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${activePage}&api_key=${API_KEY}`
    );

    return response.data;
  };

  const { data, isLoading, isError } = useQuery(
    [`searchingResults_${activePage}`, searchQuery],
    getData
  );
  console.log(data);
  return (
    <div className="list-container content-wrapper">
      <h2>Results</h2>
      <>
        {isLoading ? <p>loading...</p> : null}
        {isError ? <p>wystąpił błąd</p> : null}
        {data?.total_results > 0 ? (
          <>
            <MoviesList moviesList={data.results} resourceType="movie" />
            <Pagination
              activePage={activePage}
              setActivePage={handleSatActivePage}
              totalPages={data?.totalPages}
            />
          </>
        ) : (
          <p>Brak wyników</p>
        )}
      </>
    </div>
  );
};

export default SearchingResultsList;
