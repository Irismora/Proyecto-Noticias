import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <ul>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
