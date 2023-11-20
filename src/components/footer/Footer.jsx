import "./footer.css";
import { Logo } from "../ImageImport";

const Footer = () => {
  return (
    <footer>
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
      </nav>
      <div className="line"></div>
      <div className="me">
        <p>
          Made with ♥ by <a href="https://github.com/Rayy-007">Khant</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
