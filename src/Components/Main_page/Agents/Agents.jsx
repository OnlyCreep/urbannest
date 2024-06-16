import React from "react";
import "./styles.css";

export default function Agents() {
  return (
    <section className="agents_info">
      <h2 className="agents_info-title_warning">Не торопитесь с выбором</h2>
      <h1 className="agents_info-title_answer">
        Наши специалисты помогут вам выбрать идеальное
        <br />
        жилье по вашим критериям.
      </h1>
      <main className="agents_info-transfer">
        <div className="agents_info-transfer-card">
          <img
            src="/images/free-icon-support-1067566.png"
            alt=""
            className="agents_info-transfer-card-icon"
          />
          <h3 className="agents_info-transfer-card-title">Поддержка</h3>
          <div className="agents_info-transfer-card-description">
            Наша служба поддержки решит все проблемы возникшие в процессе
            покупки жилья
          </div>
        </div>
        <div className="agents_info-transfer-card">
          <img
            src="/images/free-icon-online-support-4935596.png"
            alt=""
            className="agents_info-transfer-card-icon"
          />
          <h3 className="agents_info-transfer-card-title">Консультация</h3>
          <div className="agents_info-transfer-card-description">
            Мы проконсультируем вас и ответим на вопросы в процессе выбора жилья
          </div>
        </div>
        <div className="agents_info-transfer-card">
          <img
            src="/images/free-icon-buildings-16491861.png"
            alt=""
            className="agents_info-transfer-card-icon"
          />
          <h3 className="agents_info-transfer-card-title">Риелтор</h3>
          <div className="agents_info-transfer-card-description">
            Если не сможете найти нужный вам вариант жилья, то вы можете
            обратиться к нашим риелторам
          </div>
        </div>
      </main>
    </section>
  );
}
