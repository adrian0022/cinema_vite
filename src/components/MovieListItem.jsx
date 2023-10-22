import { Link } from "react-router-dom";
import placeholder from '@images/placeholder.jpg'

const MovieListItem = ({ poster, title, voteAvg, id, resourceType }) => {
  return (
    <Link to={`/${resourceType}Details/${id}`}>
      <div className="movie-list-item">
        <img
          src={poster?`https://image.tmdb.org/t/p/w200${poster}`:placeholder}
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
