import "./register.css";
import { FBLogo, GGLogo, registerPeople } from "../ImageImport";

const Register = () => {
  return (
    <section className="login-container">
      <div className="left">
        <div className="left-image">
          <img src={registerPeople} alt="Animated People" />
        </div>
      </div>
      <div className="right">
        <div className="register-form">
          <div className="text">
            <h2>Let’s Explore Your Neighborhood!</h2>
            <p>Register Now!</p>
          </div>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="New Password" required />
            <input type="password" placeholder="Confirmed Password" required />
            <input type="text" placeholder="Address" required />
            <button className="btn btn-primary">Register</button>
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
            Already have an account? <a href="/login">Login Here</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
