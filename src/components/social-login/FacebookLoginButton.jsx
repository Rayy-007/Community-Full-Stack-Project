import FacebookLogin from "@greatsumini/react-facebook-login";
import { FBLogo } from "../ImageImport";

const FacebookLoginButton = ({ onHandleFacebookLoginSuccess }) => {
  return (
    <FacebookLogin
      className="social facebook"
      // href="/facebook-login"
      appId="280211087819312"
      autoLoad={false}
      fields="name, email, picture"
      onProfileSuccess={(data) => {
        // console.log(data);
      }}
      onSuccess={onHandleFacebookLoginSuccess}
    >
      <img src={FBLogo} alt="Facebook Logo" />
      <span>Login with Facebook</span>
    </FacebookLogin>
  );
};

export default FacebookLoginButton;
