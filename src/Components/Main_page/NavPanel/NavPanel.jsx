import React from "react";
import "./styles.css";
import { CgClose } from "react-icons/cg";

export default function NavPanel(props) {
  const { panel } = props.value;
  const { OpenPanel } = props.value;
  return (
    <>
      <div
        className={`nav_bc ${panel ? "" : "active"}`}
        onClick={() => OpenPanel(!panel)}
      ></div>
      <main className={`nav_panel ${panel ? "" : "active"}`}>
        <div className="nav_panel-panel">
          <div className="nav_panel-panel-column">
            <ul className="nav_panel-panel-opps">
              <li className="nav_panel-panel-opps-elem">Главная</li>
              <li className="nav_panel-panel-opps-elem">Недвижимость</li>
              <li className="nav_panel-panel-opps-elem">Отзывы</li>
              <li className="nav_panel-panel-opps-elem">О нас</li>
            </ul>
            <ul className="nav_panel-panel-sign_block">
              <li className="nav_panel-panel-opps-elem">Регистрация</li>
              <li className="nav_panel-panel-opps-elem">Войти</li>
            </ul>
            <CgClose className="close_panel" onClick={() => OpenPanel(!panel)}/>
          </div>
        </div>
        
      </main>
    </>
  );
}
