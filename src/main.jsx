import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagina404 from "./components/Pagina404.jsx";
import Cuadricula from "./components/Cuadricula.jsx";
import Home from "./components/Home";
import CriptoPage from "./components/cripto/CriptoPage";

ReactDOM.createRoot(document.getElementById("root")).render(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>} />
        </Route>
        
        <Route path="/criptomonedas" element={<App/>}>
          <Route index element={<Cuadricula />} />
          <Route path=":id" element={<CriptoPage/>}/>
        </Route>

        <Route path="/" element={<App/>}>
          <Route path="*" element={<Pagina404 />} />
        </Route>

      </Routes>
    </BrowserRouter>
);
