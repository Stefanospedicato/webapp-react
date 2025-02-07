import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const MovieDetail = () => {
  const api_url = import.meta.env.VITE_API_URL;
  const { fetchMovie, movie } = useGlobalContext();
  const { id } = useParams();
  const { title, director, genre, image } = movie;

  useEffect(() => fetchMovie(id), []);

  return (
    <section className="home-movies">
      <div className="container">
        <div className="d-flex my-5">
          <img
            src={`${api_url}_cover${image}`}
            className="card-image detail"
            alt={title}
          />
          <div className="card-body detail mx-5 text-center">
            <h5 className="card-title detail">{title}</h5>
            <h6 className="card-director">
              <i>By {director}</i>
            </h6>
            <h6 className="card-genre">
              <i>Genere: {genre}</i>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
