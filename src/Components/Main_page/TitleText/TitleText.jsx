import React from "react";
import "./styles.css";

export default function TitleText() {
  return (
    <section className="title_info">
      <h1 className="title_info-title">
        Предоставляем ключ к вашему идеальному жилью.
      </h1>
      <h1 className="title_info-text">
        Откройте для себя разнообразные варианты{" "}
        <span className="title_info-text-honored">жилья</span>, подобрав
        идеальный дом для себя.
      </h1>
      <div className="title_info-buttons">
        <button className="title_info-buttons-butt cat">
          Каталог{" "}
          <img
            src="/images/catalog-icon.svg"
            alt=""
            className="title_info-buttons-butt-icon"
          />
        </button>
        <button className="title_info-buttons-butt more">
          Узнать больше{" "}
          <img
            src="/images/free-icon-right-arrow-271228.png"
            alt=""
            className="title_info-buttons-butt-icon"
            style={{ filter: "invert(1)" }}
          />
        </button>
      </div>
    </section>
  );
}
