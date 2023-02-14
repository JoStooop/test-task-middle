import React, {memo} from 'react';
import s from './NotesPage.module.scss';

import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';

import {NotesPageItem} from './notes-page-item/NotesPageItem';
import {getNotes} from "../../redux/selectors/notesSelector";

const NotesPage = memo(() => {
  const notes = useSelector(getNotes)

  return (
    <div className={s.wrap}>
      <div className={`${s.list} ${!notes.length ? s.list__empty : ''}`}>
        {!!notes.length ? (
          notes.map((note) =>
            <NotesPageItem key={note.id} props={note}/>
          )
        ) : (
          <div className={s.empty}>
            <h2>Тут пока что пусто... </h2>
            <Link to='/form' className={s.empty__link}>
              Перейти в форму
            </Link>
          </div>
        )}
      </div>
    </div>
  );
});

export default NotesPage;
