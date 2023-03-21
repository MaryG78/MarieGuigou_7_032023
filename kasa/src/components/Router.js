import Error from "../pages/error";
import About from "../pages/about";
import Accomodation from "../pages/accomodation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/layout";

// création d'un composant de routage
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
