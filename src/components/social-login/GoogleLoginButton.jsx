import React from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { GGLogo } from "../ImageImport";

const GoogleLoginButton = ({ onHandleSuccess, onHandleFail }) => {
  const clientId =
    "661359056290-i5sf4uhvskg53h0jhq41eclnh9oa868q.apps.googleusercontent.com";

  const login = useGoogleLogin({
    clientId,
    onSuccess: onHandleSuccess,
    onError: onHandleFail,
    scope: "email profile",
    // accessType: "offline",
    // responseType: "token id_token",
    prompt: "consent",
  });

  return (
    <>
      <button onClick={() => login()} className="social google" href="/google">
        <img src={GGLogo} alt="Google Logo" />
        <span>Login with Google</span>
      </button>
    </>
  );
};

export default GoogleLoginButton;
