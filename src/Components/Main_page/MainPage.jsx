import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./styles.css";
import TitleText from "./TitleText/TitleText";
import Houses from "./Houses/Houses";
import Agents from "./Agents/Agents";
import Reviews from "./Reviews/Reviews";
import Footer from "./Footer/Footer";
import NavPanel from "./NavPanel/NavPanel";

export default function MainPage() {
  document.title = "UrbanNest | Главная";

  const [panel, OpenPanel] = useState(false)

  return (
    <>
      <NavPanel value={{OpenPanel, panel}}/>
      <header className="MainPage_header">
        <Navbar value={{OpenPanel, panel}}/>
        <TitleText />
      </header>
      <Houses />
      <Agents />
      <Reviews />
      <Footer />
    </>
  );
}
