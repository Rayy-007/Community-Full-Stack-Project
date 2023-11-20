import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home, About, Contact, Register, Login } from "./components/PageImport";
import Terms from "./components/terms/Terms";

const App = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
