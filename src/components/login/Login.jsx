import "./login.css";
import { loginPoeple, GGLogo, FBLogo } from "../ImageImport";
import { useEffect } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

const Login = ({ setShowFooter, onFacebookLogin }) => {
  const onHandleFacebookLogin = (response) => {
    onFacebookLogin(response);
  };

  useEffect(() => {
    // This will be executed after the component is mounted
    setShowFooter(false);

    // Return a cleanup function if needed
    return () => {
      // This will be executed when the component is unmounted
      setShowFooter(true);
    };
  }, [setShowFooter]);

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
            <span>Login with Google</span>
          </a>
          <FacebookLogin
            className="social facebook"
            href="/facebook-login"
            appId="280211087819312"
            autoLoad={false}
            fields="name, email, picture"
            onSuccess={onHandleFacebookLogin}
            onProfileSuccess={(data) => {}}
            // console.log("Get Profile Success", data);
          >
            <img src={FBLogo} alt="Facebook Logo" />
            <span>Login with Facebook</span>
          </FacebookLogin>
          <p className="option">
            Does not have an account? <a href="/register">Register Here</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
