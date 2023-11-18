import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home, About, Contact } from "./components/PageImport";

const App = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
