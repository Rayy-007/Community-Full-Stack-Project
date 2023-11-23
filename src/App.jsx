import "./main.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import {
  Home,
  About,
  Contact,
  Register,
  Login,
  Footer,
} from "./components/PageImport";
import Terms from "./components/terms/Terms";
import { useState } from "react";

const App = ({ setLoginUser }) => {
  const [showFooter, setShowFooter] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  // Sending Facebook Data to the Server
  const onHandleFacebookLogin = (fbUserData) => {
    setLoginUser(fbUserData);
    console.log(fbUserData);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/store");
    }, 3000); // Adjust the delay time as needed

    fetch("http://localhost:8080/api/facebook-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken: fbUserData.accessToken,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {})
      .catch((err) => {
        console.error("Error during fetch:", err);
      });
  };

  // Sending Google data to the Server
  const onHandleGoogleLogin = (ggUserdata) => {
    setLoginUser(ggUserdata);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/store");
    }, 3000); // Adjust the delay time as needed

    fetch("http://localhost:8080/api/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken: ggUserdata.access_token,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Google Login was Not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Received Google Data from sever GG", data);
      })
      .catch((err) => {
        console.error("Error during fetch: ", err);
      });
  };

  return (
    <>
      <div id="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route
              path="/register"
              element={<Register setShowFooter={setShowFooter} />}
            />
            <Route
              path="/login"
              element={
                <Login
                  setShowFooter={setShowFooter}
                  onHandleFacebookLogin={onHandleFacebookLogin}
                  onHandleGoogleLogin={onHandleGoogleLogin}
                  isLoading={isLoading}
                />
              }
            />
          </Route>
        </Routes>
      </div>

      {showFooter && <Footer />}
    </>
  );
};

export default App;
