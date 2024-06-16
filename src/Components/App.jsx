import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Main_page/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
