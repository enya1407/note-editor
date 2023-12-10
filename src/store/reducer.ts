import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid';
import {INote, IState} from "../model/interface";

const getNotes = (): INote[] => {
  const notes = localStorage.getItem('notes')
  return notes ? JSON.parse(notes) as INote[] : [];
};

const initialState: IState = {
  notes: getNotes(),
  tempTags: [],
  selectedTags: []
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.notes = [...state.notes, {text: action.payload, id: uuidv4()}]
      state.tempTags = []
    },
    editNote: (state, action: PayloadAction<INote>) => {
      state.notes = state.notes.map((el: INote) => el.id === action.payload.id ? {
        ...el,
        text: action.payload.text
      } : el)

    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((el: INote) => el.id !== action.payload)
    },
    addTempTags: (state, action: PayloadAction<string[]>) => {
      state.tempTags = action.payload
    },
    toggleSelectedTags: (state, action: PayloadAction<string>) => {
      if (state.selectedTags.includes(action.payload)) {
        state.selectedTags = state.selectedTags.filter(el => el !== action.payload)
      } else {
        state.selectedTags = [...state.selectedTags, action.payload]
      }
    },
  },
})

export const {addNote, editNote, deleteNote, addTempTags, toggleSelectedTags} = noteSlice.actions

export default noteSlice.reducer