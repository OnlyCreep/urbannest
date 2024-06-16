import React, { useEffect } from "react";
import "./Styles.css";

export default function Navbar(props) {
  const {OpenPanel} = props.value
  const {panel} = props.value

  return (
    <nav className="navbar">
        <span className="navbar-logo">
          <span className="navbar-logo-part_1">Urban</span>
          <span className="navbar-logo-part_2">Nest</span>
        </span>
        <ul className="navbar-opps">
            <li className="navbar-opps-elem">Главная</li>
            <li className="navbar-opps-elem">Недвижимость</li>
            <li className="navbar-opps-elem">Отзывы</li>
            <li className="navbar-opps-elem">О нас</li>
        </ul>
        <div className="navbar-sign_buttons">
            <span className="navbar-sign_buttons-reg">Регистрация</span>
            <span className="navbar-sign_buttons-sign">Войти</span>
        </div>
        <img src="/images/burger_menu.svg" alt="" className="navbar-burger_menu" onClick={()=>OpenPanel(!panel)}/>
    </nav>
  );
}
