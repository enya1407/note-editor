import {configureStore} from '@reduxjs/toolkit'

import noteReducer from './reducer'

export const store = configureStore({reducer: noteReducer})

store.subscribe(() => {
  const notes = store.getState().notes;
  localStorage.setItem("notes", JSON.stringify(notes));
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
