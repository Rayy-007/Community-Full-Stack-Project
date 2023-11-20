import "./login.css";
import { loginPoeple, GGLogo, FBLogo } from "../ImageImport";

const Login = () => {
  return (
    <section className="login-container">
      <div className="left">
        <div className="left-image">
          <img src={loginPoeple} alt="Animated People" />
        </div>
      </div>
      <div className="right">
        <div className="login-form">
          <div className="text">
            <h2>Welcome Back!</h2>
            <p>Login!</p>
          </div>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
        <div className="orLine">Or</div>
        <div className="social-form">
          <a className="social google" href="/google">
            <img src={GGLogo} alt="Google Logo" />
            <span>Connect with Google</span>
          </a>
          <a className="social facebook" href="/facebook">
            <img src={FBLogo} alt="Facebook Logo" />
            <span>Connect with Facebook</span>
          </a>
          <p className="option">
            Does not have an account? <a href="/register">Register Here</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
