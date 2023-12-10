import React, {ChangeEventHandler, memo, useCallback, useState} from "react";
import {Button, Input, Space} from "antd";
import {useDispatch} from "react-redux";
import {addNote} from "../../store/reducer";
import styles from './CreateNotes.module.css';
import {useAddTempTags} from "../../hooks/useAddTempTags";

export const CreateNotes = memo(() => {
  const [note, setNote] = useState("")
  const dispatch = useDispatch()

  const addTempTags = useAddTempTags();

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        const value = e.target.value

        if (value.includes("#")) {
          addTempTags(value)

        }
        setNote(value)
      },
      [addTempTags]
  )

  const handleAdd = () => {
    dispatch(addNote(note))
    setNote("")
  }

  return <>
    <Space.Compact className={styles.space}>
      <Input
          className={styles.input}
          placeholder="note"
          value={note}
          onChange={handleChange}
      />
      <Button type="primary" onClick={handleAdd}>
        add
      </Button>
    </Space.Compact>
  </>
})