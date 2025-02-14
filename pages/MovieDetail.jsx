import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import ReviewForm from "../components/ReviewForm";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const api_url = import.meta.env.VITE_API_URL;
  const { fetchMovie, movie, renderReviews, deleteMovie } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id);
  }, []);

  const { title, director, genre, abstract, image, reviews } = movie;

  return (
    <>
      <section className="home-movies">
        <div className="container">
          <div className="d-flex my-5">
            <img
              src={`${api_url}_cover/${image}`}
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
              <p className="abstract">{abstract}</p>
              <Link
                to="/"
                onClick={() => {
                  if (confirm("Sei sicuro di voler eliminare questo film?")) {
                    deleteMovie(movie.id);
                  }
                }}
                className="btn btn-danger"
              >
                ELIMINA FILM
              </Link>
            </div>
          </div>
          {reviews && reviews.length > 0 && renderReviews()}
          <section>
            <ReviewForm movie_id={movie?.id} fetchMovie={fetchMovie} />
          </section>
        </div>
      </section>
    </>
  );
};

export default MovieDetail;
