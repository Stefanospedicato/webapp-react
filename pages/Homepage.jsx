import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const Homepage = () => {
  const { fetchMovies, movies, renderMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="home-movies">
      <div className="container">
        <div className="row">
          <div className="justify-content-center d-flex flex-wrap">
            {renderMovies()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
