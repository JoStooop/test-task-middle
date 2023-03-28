import React from 'react';
import s from './MyNote.module.scss'

import {Link} from "react-router-dom";

const MyNote = (props) => {
  const { noteId, text, signature, time } = props
  const validText = text === ''
      ? 'Вы не добавили описание...('
      : text;

  return (
    <div className={s.wrap}>
      <div>
        <h4 className={s.wrap__signature}>{signature}</h4>
        <h2 className={s.wrap__title}>{`Заметка №: ${noteId}`}</h2>
        <h2 className={s.wrap__time}>{time}</h2>
        <p className={s.wrap__desk}>{validText}</p>
      </div>
      <Link to='/notes' className={s.wrap__back}>
        Вернуться обратно
      </Link>
    </div>
  );
};

export {MyNote};
