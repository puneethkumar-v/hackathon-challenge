import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/Auth/Login/LoginPage";
import SignUp from "./components/Auth/SignUp/SignUp";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
