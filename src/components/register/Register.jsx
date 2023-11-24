import "./register.css";
import { registerPeople } from "../ImageImport";
import { useEffect, useState } from "react";
import GoogleLoginButton from "../social-login/GoogleLoginButton";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLoginButton from "../social-login/FacebookLoginButton";

const Register = ({
  setShowFooter,
  onHandleFacebookLogin,
  onHandleGoogleLogin,
  isLoading,
  onHandleRegister,
}) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the passwordsMatch state when any input changes
    setPasswordsMatch(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Check if passwords match and update the passwordsMatch state
    setPasswordsMatch(formData.password === e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simple client-side validation to check if password and confirmation match
    if (!passwordsMatch) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    console.log("Form data submitted:", formData);

    onHandleRegister(formData);
  };

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

  // Hide the Footer in Login Page
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
          <img src={registerPeople} alt="Animated People" />
        </div>
      </div>
      <div className="right">
        <div className="register-form">
          <div className="text">
            <h2>Let’s Explore Your Neighborhood!</h2>
            <p>Register Now!</p>
          </div>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{
                borderColor: passwordsMatch ? "" : "red",
              }}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
        <div className="orLine">Or</div>
        {isLoading ? (
          <div className="lds-roller">
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

export default Register;
