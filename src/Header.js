import { Link } from "react-router-dom";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";
const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header className="Header">
      <Link to="/" className="home-link">
        <h1>{title}</h1>
        {width < 768 ? (
          <FaMobileAlt className="icon" />
        ) : width < 992 ? (
          <FaTabletAlt className="icon" />
        ) : (
          <FaLaptop className="icon" />
        )}
      </Link>
    </header>
  );
};
export default Header;
