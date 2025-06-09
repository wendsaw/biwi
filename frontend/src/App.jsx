import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Components
import Layout from "./components/Layout";
import PlateFormesInformatique from "./components/PlateFormesInformatique";
import DeveloppementWeb from "./components/DeveloppementWeb";
import ApplicationsMobiles from "./components/ApplicationsMobiles";
import VenteMateriels from "./components/VenteMateriels";
import SolutionsCloud from "./components/SolutionsCloud"; // ✅

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="plateformes-informatiques" element={<PlateFormesInformatique />} />
          <Route path="solutions-cloud" element={<SolutionsCloud />} /> {/* ✅ maintenant une route indépendante */}
          <Route path="developpement-web" element={<DeveloppementWeb />} />
          <Route path="applications-mobiles" element={<ApplicationsMobiles />} />
          <Route path="vente-materiels" element={<VenteMateriels />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
