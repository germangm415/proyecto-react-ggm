import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Menu />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
);
