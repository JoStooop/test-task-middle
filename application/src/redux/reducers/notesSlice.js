import {createSlice} from '@reduxjs/toolkit';

import db from '../../db/db.json'
const notes = db['notes'];

const initialState = {
  loading: 'idle',
  data: notes,
  error: null,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNote(state, action) {
      state.data.push(action.payload);
    },
    deleteNote(state, action) {
      state.data = state.data.filter((note) => note.id !== action.payload);
    },
  },
});

export const {
  setNote,
  deleteNote,
} = notesSlice.actions;

export default notesSlice.reducer;
