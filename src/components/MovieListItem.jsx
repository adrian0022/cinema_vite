import { Link } from "react-router-dom";

const MovieListItem = ({ poster, title, voteAvg, id, resourceType }) => {
  return (
    <Link to={`/${resourceType}Details/${id}`}>
      <div className="movie-list-item">
        <img
          src={"https://image.tmdb.org/t/p/w200" + poster}
          alt={title + " poster"}
        />
        <div>
          <p>{title}</p>
          <span>{voteAvg} / 10</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieListItem;
