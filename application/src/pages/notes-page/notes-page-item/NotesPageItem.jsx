import React, {memo} from 'react';
import s from './NotesPageItem.module.scss';

import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {deleteNote} from "../../../redux/reducers/notesSlice";

// import {deleteNote} from '../../../../redux/notesSlice';

const NotesPageItem = memo(({props}) => {
  const {
    noteId,
    id,
    text,
    signature,
    time,
  } = props

  const dispatch = useDispatch();

  const checkText = text === '' ? 'Здесь должен был быть текст...' : text;
  const validText = checkText && checkText.length > 43 ? `${text?.slice(0, 40)}...` : checkText;

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(deleteNote(id));
  }

  return (
    <div className={s.item}>
      <Link to={`/notes/${id}`} className={s.item__link}>
        <h4 className={s.item__signature}>{signature}</h4>
        <h2 className={s.item__title}>{`Заметка №: ${noteId}`}</h2>
        <h2 className={s.item__time}>{time}</h2>
        <p className={s.item__desk}>{validText}</p>
      </Link>
      <div className={s.item__delete} onClick={handleClick}/>
    </div>
  );
});

export {NotesPageItem};
