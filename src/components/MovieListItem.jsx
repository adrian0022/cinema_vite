import { Link } from "react-router-dom";

const MovieListItem = ({ poster, title, voteAvg, id }) => {
  return (
    <Link to={`/movieDetails/${id}`}>
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
