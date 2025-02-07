import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ movie }) => {
  const { id, title, director, genre, image } = movie;
  return (
    <>
      <div key={id} className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-text">
            <i>By {director}</i>
          </h6>
          <h6 className="card-text">
            <i>Genere: {genre}</i>
          </h6>
          {/* {average_vote && <StarRating vote={average_vote} />} */}
          <Link to={`movies/${id}`} className="btn btn-warning">
            SCOPRI
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
