import React, {memo} from "react";
import {useSelector} from 'react-redux'
import {Note} from "./Note/Note";
import {notesSelector} from "../../store/selectors";

export const NotesList = memo(() => {
  const notes = useSelector(notesSelector)

  return <>
    {notes.map((el) => <Note key={el.id} el={el}/>)}
  </>
})
