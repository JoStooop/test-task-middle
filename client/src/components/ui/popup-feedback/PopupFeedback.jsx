import React from 'react';
import s from './PopupFeedback.module.scss';

const PopupFeedback = (props) => {
  const {active, setActive} = props;

  const handleButtonClick = (e) => {
    e.preventDefault();
    setActive(false);
  };

  return (
    <div className={`${s.popup} ${active && s.popup_active}`} onClick={()=> setActive(false)}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <p className={s.title}>Ваше письмо отправлено!</p>
        <p className={s.desc}>Какое-то сообщение о том, что письмо отправлено.</p>
        <button className={s.button} onClick={handleButtonClick}>Закрыть окно</button>
      </div>
    </div>
  );
};

export {PopupFeedback};
