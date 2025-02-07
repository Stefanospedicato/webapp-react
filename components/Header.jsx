import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/" className="m-3 header-title">
          My Movies{" "}
        </Link>
      </header>
    </>
  );
};

export default Header;
