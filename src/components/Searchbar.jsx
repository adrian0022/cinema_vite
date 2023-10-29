import ChevronRight from "../assets/icons/ChevronRight";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const selectConfig = {
  movie: "Search Movie",
  tv: "Search TV Series",
};

export const Searchbar = () => {
  const serachInput = useRef();
  const [selectOpened, setSelectOpened] = useState(false);
  const [activeResultType, setActiveResultType] = useState(
    Object.keys(selectConfig)[0]
  );
  const navigate = useNavigate();

  const search = () => {
    const value = serachInput.current.value.trim();

    if (value.length > 2) {
      navigate(`/search?resultType=${activeResultType}&query=${value}`);
    }
  };

  const toggleSelect = () => {
    setSelectOpened((prev) => !prev);
  };

  const selectOption = (option) => {
    setActiveResultType(option);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") search();
  };

  return (
    <div className="searchbar">
      <div className="left-side">
        <span
          className={`open-select${selectOpened ? " opened" : ""}`}
          onClick={toggleSelect}
        >
          <ChevronRight />
        </span>
        <div className="custom-select" onClick={toggleSelect}>
          <div className="active-value">{selectConfig[activeResultType]}</div>
          <div
            className={`options-wrapper${selectOpened ? " opened" : ""}`}
            onClick={(e) => e.preventDefault()}
          >
            <ul>
              {Object.keys(selectConfig).map((key) => {
                return (
                  <li onClick={() => selectOption(key)} key={key}>
                    {selectConfig[key]}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="right-side">
        <input
          type="text"
          name="search"
          placeholder="Search Moviebase.."
          ref={serachInput}
          onKeyDown={handleEnterSearch}
        />
        <svg
          xmlns="httpg://www.w3.org/2000/sv"
          viewBox="0 0 24 24"
          className="search-icon"
          onClick={search}
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>
      </div>
    </div>
  );
};
