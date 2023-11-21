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
                    onFacebookLogin={onHandleFacebookLogin}
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
