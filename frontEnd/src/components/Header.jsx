import Auth from "./Auth";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Noticias</Link>
      </h1>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};

export default Header;
