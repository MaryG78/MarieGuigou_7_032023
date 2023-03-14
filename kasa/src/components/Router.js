import Home from "../pages/home";
import Error from "../pages/error";
import About from "../pages/about";
import Accomodation from "../pages/accomodation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// création d'un composant de routage
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
