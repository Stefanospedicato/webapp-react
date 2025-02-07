import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/" className="m-3 header-title">
          MY FILM AREA{" "}
        </Link>
      </header>
    </>
  );
};

export default Header;
