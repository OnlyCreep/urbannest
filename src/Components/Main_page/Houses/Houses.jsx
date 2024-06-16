import React from "react";
import "./styles.css";

export default function Houses() {
  return (
    <section className="houses_info">
      <h1 className="houses_info-title">
        Найдите свое <span className="houses_info-title-honored">жилье</span>{" "}
        среди разнообразия
        <br />
        предложений.
      </h1>
      <main className="houses_info-content">
        <div className="houses_info-content-main_card">
          <img
            src="/images/modern-house-architectural-design-photography.jpg"
            alt=""
            className="houses_info-content-main_card-img"
          />
          <aside className="houses_info-content-main_card-info">
            <h1 className="houses_info-content-main_card-info-name">
              Коттедж 145 м²
            </h1>
            <h2 className="houses_info-content-main_card-info-address">
              Алтайский край, Барнаул, р-н Индустриальный, Волгоградская улица
            </h2>
            <h3 className="houses_info-content-main_card-info-price">
              18 000 000 ₽
            </h3>
            <div className="houses_info-content-main_card-info-description">
            </div>
          </aside>
        </div>
        <div className="houses_info-content-seconds_cards">
          <div className="houses_info-content-seconds_cards-elem">
            <img
              src="/images/modern-house-architectural-design-photography 1.png"
              className="houses_info-content-seconds_cards-elem-image"
            />
            <aside className="houses_info-content-seconds_cards-elem-info">
              <h1 className="houses_info-content-seconds_cards-elem-info-name">
                Коттедж 125 м²
              </h1>
              <div className="houses_info-content-seconds_cards-elem-info-address">
                Алтайский край, Барнаул, р-н Индустриальный, Волгоградская улица
              </div>
              <div className="houses_info-content-seconds_cards-elem-info-price">
                16 000 000 ₽
              </div>
            </aside>
          </div>
          <div className="houses_info-content-seconds_cards-elem">
          <img
              src="/images/image3.png"
              className="houses_info-content-seconds_cards-elem-image"
            />
            <aside className="houses_info-content-seconds_cards-elem-info">
              <h1 className="houses_info-content-seconds_cards-elem-info-name">
                Частный дом 110 м²
              </h1>
              <div className="houses_info-content-seconds_cards-elem-info-address">
                Алтайский край, Барнаул, р-н Индустриальный, Волгоградская улица
              </div>
              <div className="houses_info-content-seconds_cards-elem-info-price">
                12 000 000 ₽
              </div>
            </aside>
          </div>
        </div>
      </main>
    </section>
  );
}
