import { createContext, useContext, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import ReviewCard from "../components/ReviewCard";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div className="col-12 col-md-5 col-lg-3 m-3" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };

  const renderReviews = () => {
    return movie.reviews.map((movie) => (
      <ReviewCard key={movie.id} review={movie} />
    ));
  };

  const fetchMovies = () => {
    axios.get(api_url).then((res) => {
      setMovies(res.data);
    });
  };

  const fetchMovie = (id) => {
    axios.get(`${api_url}/${id}`).then((res) => {
      setMovie(res.data);
    });
  };

  const value = {
    fetchMovies,
    movies,
    renderMovies,
    fetchMovie,
    movie,
    renderReviews,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
