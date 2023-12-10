import React, {useReducer} from "react";
import {Tag} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {toggleSelectedTags} from "../../../store/reducer";
import styles from "./Tags.module.css";
import {selectedTagsSelector} from "../../../store/selectors";

const not = (v: boolean) => !v

export function Tags({tag}: { tag: string }) {
  const selectedTags = useSelector(selectedTagsSelector)
  const [editing, toggleEditing] = useReducer(not, false)
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(toggleSelectedTags(tag))
    toggleEditing()
  }

  return (
      <Tag
          className={styles.tag}
          color={selectedTags.includes(tag) ? "success" : "processing"}
          onClick={clickHandler}
      >
        {tag}
      </Tag>
  )
}