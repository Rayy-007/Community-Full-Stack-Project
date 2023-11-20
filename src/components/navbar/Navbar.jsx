import "./navbar.css";
import { Logo } from "../ImageImport";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = {
    fontWeight: 700,
    color: "#3d87f5",
  };

  return (
    <nav>
      <a href="/" className="logo-container">
        <img src={Logo} alt="Logo" />
      </a>

      <div className="nav-links">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="/terms"
            >
              Terms
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="cta-container">
        <a className="btn btn-primary" href="/register">
          Register
        </a>
        <a className="btn btn-outline" href="/login">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
