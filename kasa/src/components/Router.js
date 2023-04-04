import { Routes, Route } from "react-router-dom";
import Error from "../pages/Error";
import About from "../pages/About";
import Accomodation from "../pages/Accomodation";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

// création d'un composant de routage
function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Router;
