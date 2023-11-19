import "./navbar.css";
import { Logo } from "../ImageImport";

const Navbar = () => {
  return (
    <nav>
      <a href="/" className="logo-container">
        <img src={Logo} alt="Logo" />
      </a>

      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/terms">Terms</a>
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
