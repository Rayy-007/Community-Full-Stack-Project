import "./login.css";
import { loginPoeple } from "../ImageImport";
import { useEffect, useState } from "react";
import GoogleLoginButton from "../social-login/GoogleLoginButton";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLoginButton from "../social-login/FacebookLoginButton";

const Login = ({
  setShowFooter,
  onHandleFacebookLogin,
  onHandleGoogleLogin,
  isLoading,
}) => {
  // Not Shwoing Footer in Login Page
  useEffect(() => {
    setShowFooter(false); // This will be executed after the component is mounted

    return () => {
      // Return a cleanup function if needed

      setShowFooter(true); // This will be executed when the component is unmounted
    };
  }, [setShowFooter]);

  // Handling Google Login
  // Google Client ID
  const clientId =
    "661359056290-i5sf4uhvskg53h0jhq41eclnh9oa868q.apps.googleusercontent.com";

  const onHandleGoogleLoginSuccess = (response) => {
    onHandleGoogleLogin(response);
    console.log("Sucess ---> ");
  };

  const onHandleGoogleLoginFail = (error) => {
    console.log("Fail ---> ", error);
  };

  // Handling Facebook Login
  const onHandleFacebookLoginSuccess = (response) => {
    onHandleFacebookLogin(response);
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

        {isLoading ? (
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="social-form">
            <GoogleOAuthProvider clientId={clientId}>
              <GoogleLoginButton
                onHandleSuccess={onHandleGoogleLoginSuccess}
                onHandleFail={onHandleGoogleLoginFail}
              />
            </GoogleOAuthProvider>

            <FacebookLoginButton
              onHandleFacebookLoginSuccess={onHandleFacebookLoginSuccess}
            />

            <p className="option">
              Does not have an account? <a href="/register">Register Here</a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
