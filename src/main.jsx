import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagina404 from "./components/Pagina404.jsx";
import Cuadricula from "./components/Cuadricula.jsx";
import Home from "./components/Home";
import CriptoPage from "./components/cripto/CriptoPage";
import Perfil from "./components/usuarios/Perfil";
import { UserContextProvider } from "./context/UserContext";
import Login from "./components/usuarios/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>

        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path=":id" element={<CriptoPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
