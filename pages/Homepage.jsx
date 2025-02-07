import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const Homepage = () => {
  const { fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return <div>Homepage</div>;
};

export default Homepage;
