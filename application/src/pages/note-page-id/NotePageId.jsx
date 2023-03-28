import React, {useMemo} from 'react';
import s from './NotePageId.module.scss';

import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

import {getNotes} from "../../redux/selectors/notesSelector";
import {MyNote} from "../../components/ui/my-note/MyNote";

const NotePageId = () => {
  const notes = useSelector(getNotes)
  const {id} = useParams();

  const filterNote = useMemo(
    () => notes.filter((note) => note.id === Number(id)),
    [id, notes]
  );

  const {noteId, text, signature, time} = filterNote.at(0);
  return (
    <div className={s.wrap}>
      <MyNote
        noteId={noteId}
        text={text}
        signature={signature}
        time={time}
      />
    </div>
  );
};

export default NotePageId;
