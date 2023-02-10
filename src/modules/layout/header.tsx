import { Link, useNavigate } from "react-router-dom";
import { Animals } from "../pages/animals/animals"

export const Header = () => {
     const navigate = useNavigate();

  return (
    <div className="header">
      <nav>
        <Link to="/" className="link">
          Homepage
        </Link>
        <Link to="/animals/new-animal" className="link">
          New Animal
        </Link>
      </nav>
    </div>
  );
};