import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  const [showFooter, setShowFooter] = useState(true);

  const onHandleFacebookLogin = (fbUserData) => {
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
      .then((data) => {
        console.log("Received response from server:", data);
      })
      .catch((err) => {
        console.error("Error during fetch:", err);
      });
  };

  const onHandleGoogleLogin = (ggUserdata) => {
    console.log(ggUserdata);
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
        console.log("Received Google Data from sever", data);
      })
      .catch((err) => {
        console.error("Error during fetch: ", err);
      });
  };

  return (
    <>
      <div id="app">
        <BrowserRouter>
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
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {showFooter && <Footer />}
    </>
  );
};

export default App;
