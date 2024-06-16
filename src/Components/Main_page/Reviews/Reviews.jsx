import React, { useState } from "react";
import "./styles.css";

export default function Reviews() {
  const [elem_height, setHeight] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setHeight(window.innerWidth);
  });
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<img src="/images/star.svg" alt="" className="reviews-clients-elem-profile-name_rate-rate-star"/>);
  }
  return (
    <section className="reviews">
      <div
        className="reviews-string_title"
        style={{
          "--heightElem": `${elem_height > 1024 ? 150 : elem_height / 8}px`,
        }}
      >
        <h1 className="reviews-string_title-main_text">
          подробные и искренние рецензии о наших услугах
        </h1>
        <h2 className="reviews-string_title-qw">
          что говорят наши клиенты о нас?
        </h2>
      </div>
      <main className="reviews-clients">
        <div className="reviews-clients-elem">
          <div className="reviews-clients-elem-text">
            Я хочу выразить благодарность компании за профессиональный подход к
            поиску моего нового дома. Благодаря помощи агентов я быстро нашел
            идеальный вариант для своей семьи. Сотрудники отлично знают рынок
            недвижимости и смогли предложить нам оптимальные варианты, учитывая
            все наши пожелания и бюджет. Кроме того, они оказали помощь во всех
            оформительских вопросах, что значительно облегчило процесс покупки.
            Сейчас мы счастливы в новом доме и благодарны агентству за их
            профессионализм и индивидуальный подход.
          </div>
          <div className="reviews-clients-elem-profile">
            <img
              src="/images/image 3.png"
              alt=""
              className="reviews-clients-elem-profile-img"
            />
            <div className="reviews-clients-elem-profile-name_rate">
              <span className="reviews-clients-elem-profile-name_rate-name">
                Дональд Маскольт
              </span>
              <span className="reviews-clients-elem-profile-name_rate-rate">
                {stars}
              </span>
            </div>
          </div>
        </div>
        <div className="reviews-clients-elem">
          <div className="reviews-clients-elem-text">
            Мне понравился сервис и качество работы компании. При обращении за
            помощью в поиске аренды квартиры, менеджеры провели детальную
            консультацию, выяснили все наши пожелания и предложили несколько
            подходящих вариантов. Особенно порадовало то, что все предложения
            были в нашем ценовом диапазоне и соответствовали нашим требованиям.
            После выбора квартиры, процесс аренды был организован быстро и без
            лишних хлопот. Мы благодарны агентству за оперативность,
            профессионализм и дружественный подход к клиентам. Рекомендую всем,
            кто ищет жилье, обратиться именно в эту компанию.
          </div>
          <div className="reviews-clients-elem-profile">
            <img
              src="/images/image 2.png"
              alt=""
              className="reviews-clients-elem-profile-img"
            />
            <div className="reviews-clients-elem-profile-name_rate">
              <span className="reviews-clients-elem-profile-name_rate-name">
                Мария Томикова
              </span>
              <span className="reviews-clients-elem-profile-name_rate-rate">
                {stars}
              </span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
