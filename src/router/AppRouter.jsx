import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Services from "../pages/Services/Services.jsx";
import Offers from "../pages/Offers/Offers.jsx";
import Prevention from "../pages/Prevention/Prevention.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prestations" element={<Services />} />
      <Route path="/offres" element={<Offers />} />
      <Route path="/prevention" element={<Prevention />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;