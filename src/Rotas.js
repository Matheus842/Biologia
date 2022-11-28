import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";

import Index from "./pages";
import NavBar from "./pages/components/NavBar";
import Teste from "./pages/teste";
import Mental from "./pages/Mental";
import Corporal from "./pages/Corporal";
import Error from "./pages/404";
import { Footer } from "./pages/components/Footer";

function Rotas() {
  return (
    <Router>
      <BubblyContainer />
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Index />} />
            <Route path="mental" element={<Mental />} />
            <Route path="corporal" element={<Corporal />} />
            <Route path="teste" element={<Teste />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default Rotas;
