import React, {ChangeEventHandler, useCallback, useReducer, useState} from "react";
import {Button, Row} from "antd";
import styles from "./Note.module.css";
import {deleteNote, editNote} from "../../../store/reducer";
import {INote} from "../../../model/interface";
import {useDispatch} from "react-redux";
import TextArea from "antd/es/input/TextArea";
import {useAddTempTags} from "../../../hooks/useAddTempTags";

const not = (v: boolean) => !v

export function Note({el}: { el: INote }) {
  const [editing, toggleEditing] = useReducer(not, false)
  const [note, setNote] = useState(el.text)
  const dispatch = useDispatch()
  const addTempTags = useAddTempTags();

  const saveHandler = () => {
    dispatch(editNote({...el, text: note}))
    toggleEditing()
  }
  const cancelHandler = () => {
    toggleEditing()
    setNote(el.text)
  }
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
      (e) => {
        const value = e.target.value

        if (value.includes("#")) {
          addTempTags(value)

        }
        setNote(value)
      },
      [addTempTags]
  )

  return editing
      ? (
          <Row className={styles.card}>
            <div className={styles.content}>
              <TextArea
                  className={styles.textArea}
                  autoSize={{minRows: 2}}
                  onChange={handleChange}
                  value={note}
              />
            </div>
            <div className={styles.buttons}>
              <Button type="primary" onClick={saveHandler}>
                save
              </Button>
              <Button
                  type="primary"
                  className={styles.bottomButton}
                  onClick={cancelHandler}
              >
                cancel
              </Button>
            </div>

          </Row>
      )
      : (
          <Row className={styles.card}>
            <p className={styles.content} key={el.id}>{note}</p>
            <div className={styles.buttons}>
              <Button type="primary" onClick={toggleEditing}>
                edit
              </Button>
              <Button
                  type="primary"
                  className={styles.bottomButton}
                  onClick={() => dispatch(deleteNote(el.id))}
              >
                delete
              </Button>
            </div>
          </Row>
      )

}