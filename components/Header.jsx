import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/" className="m-3 header-title">
          FILM AREA{" "}
        </Link>
        <Link className="btn header-title" to="/movies/create">
          Aggiungi un film <i class="bi bi-plus"></i>
        </Link>
      </header>
    </>
  );
};

export default Header;
