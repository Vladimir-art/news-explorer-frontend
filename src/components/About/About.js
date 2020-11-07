import React from 'react';
import author from '../../images/author.png';

function About() {
  return (
    <section className="about">
      <div className="about__cover">
        <img className="about__image" alt="Автор" src={author} />
        <div className="about__info">
          <h2 className="about__title">Об авторе</h2>
          <p className="about__knowledge">
            Это блок с описанием автора проекта. Здесь следует указать,
            как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.
          </p>
          <p className="about__knowledge">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
