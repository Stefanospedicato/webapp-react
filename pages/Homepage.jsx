import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const Homepage = () => {
  const { fetchMovies, movies, renderMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="row-cols-3">{renderMovies()}</div>
      </div>
    </div>
  );
};

export default Homepage;
