import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Habilidades from "./pages/Habilidades";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Proyectos />}></Route>
          <Route path="/skills" element={<Habilidades />}></Route>
          <Route path="/contact" element={<Contacto />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;