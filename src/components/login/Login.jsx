import "./login.css";
import { loginPoeple, GGLogo, FBLogo } from "../ImageImport";
import { useEffect } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import GoogleLoginButton from "../social-login/GoogleLoginButton";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login = ({
  setShowFooter,
  onHandleFacebookLogin,
  onHandleGoogleLogin,
}) => {
  // Not Shwoing Footer in Login Page
  useEffect(() => {
    // This will be executed after the component is mounted
    setShowFooter(false);

    // Return a cleanup function if needed
    return () => {
      // This will be executed when the component is unmounted
      setShowFooter(true);
    };
  }, [setShowFooter]);

  // Handling Facebook Login
  const onHandleFacebookLoginSuccess = (response) => {
    onHandleFacebookLogin(response);
  };

  // Handling Google Login
  // Google Client ID
  const clientId =
    "661359056290-i5sf4uhvskg53h0jhq41eclnh9oa868q.apps.googleusercontent.com";

  const onHandleGoogleLoginSuccess = (response) => {
    onHandleGoogleLogin(response);
    console.log("Sucess ---> ", response);
  };

  const onHandleGoogleLoginFail = (error) => {
    console.log("Fail ---> ", error);
  };

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
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLoginButton
              onHandleSuccess={onHandleGoogleLoginSuccess}
              onHandleFail={onHandleGoogleLoginFail}
            />
          </GoogleOAuthProvider>

          <FacebookLogin
            className="social facebook"
            href="/facebook-login"
            appId="280211087819312"
            autoLoad={false}
            fields="name, email, picture"
            onSuccess={onHandleFacebookLoginSuccess}
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
