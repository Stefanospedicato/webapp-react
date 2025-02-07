import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;

  const [movies, setMovies] = useState([]);

  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div className="col" key={movie.id}>
          {movie.title}
        </div>
      );
    });
  };

  const fetchMovies = () => {
    axios.get(api_url).then((res) => {
      setMovies(res.data);
    });
  };

  const value = { fetchMovies, movies, renderMovies };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
