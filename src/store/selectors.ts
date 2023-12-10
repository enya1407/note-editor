import {RootState} from "./store";
import {createSelector} from "@reduxjs/toolkit";

export const selectedTagsSelector = (state: RootState) => state.selectedTags
const baseNotesSelector = (state: RootState) => state.notes
const tempTagsSelector = (state: RootState) => state.tempTags

export const notesSelector = createSelector(
    [selectedTagsSelector, baseNotesSelector],
    (selectedTags, notes) => {
      if (selectedTags.length === 0) {
        return notes
      }

      return notes.filter(el => selectedTags.some((it) => el.text.includes(it)))
    }
)

export const tagsSelector = createSelector(
    [baseNotesSelector, tempTagsSelector],
    (notes, tempTags) => {
      const noteTags = notes
          .map(({text}) => text)
          .reduce<string[]>((acc, it) => acc.concat(it.split(" ").filter((part) => part.startsWith("#"))), [])

      return Array.from(new Set([...noteTags, ...tempTags]))

    }
)
