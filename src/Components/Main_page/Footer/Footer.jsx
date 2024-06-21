import React, { useState } from "react";
import "./styles.css";

export default function Footer() {
  const [empty, setEmpty] = useState(false);
  return (
    <footer>
      <main className="footer-elem">
        <div className="footer-elem-column">
          <div className="footer-elem-column-laws">
            <span className="navbar-logo">
              <span className="navbar-logo-part_1">Urban</span>
              <span className="navbar-logo-part_2">Nest</span>
            </span>
            <span className="footer-elem-column-laws-copy">
              © все права защищены
            </span>
          </div>
          <ul className="footer-elem-column-opps">
            <li className="footer-elem-column-opps-block">Главная</li>
            <li className="footer-elem-column-opps-block">Каталог</li>
            <li className="footer-elem-column-opps-block">О нас</li>
            <li className="footer-elem-column-opps-block">Отзывы</li>
          </ul>
        </div>
        <div className="footer-elem-column">
          <div>
            <h1 className="footer-elem-column-sub_title">
              Подпишитесь чтобы получать наши новости
            </h1>
            <form className="footer-elem-column-sub_form">
              <div className="footer-elem-column-sub_elem">
                <input
                  type="text"
                  className="footer-elem-column-sub_form-email"
                  id="email"
                  autoComplete="none"
                  onChange={(e) => {
                    if (e.target.value) setEmpty(true);
                    else setEmpty(false);
                  }}
                />
                <label
                  htmlFor="email"
                  className={`footer-elem-column-sub_form-email_label ${
                    empty ? "active" : ""
                  }`}
                >
                  Email
                </label>
              </div>
              <button
                className="footer-elem-column-sub_form-button"
                type="button"
              >
                Подписаться
              </button>
            </form>
          </div>
          <div className="footer-elem-column-social">
            <div className="footer-elem-column-social-title">
              Поддержите нас в соцсетях
            </div>
            <div className="footer-elem-column-social-icons">
              <img
                src="/images/free-icon-facebook-app-symbol-20837.png"
                alt=""
                className="footer-elem-column-social-icons-elem"
              />
              <img
                src="/images/free-icon-vk-social-network-logo-25684.png"
                alt=""
                className="footer-elem-column-social-icons-elem"
              />
              <img
                src="/images/free-icon-social-12940260.png"
                alt=""
                className="footer-elem-column-social-icons-elem"
              />
              <img
                src="/images/3128219.png"
                alt=""
                className="footer-elem-column-social-icons-elem"
              />
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
}
