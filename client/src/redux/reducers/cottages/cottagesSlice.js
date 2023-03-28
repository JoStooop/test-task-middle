import {createSlice} from '@reduxjs/toolkit';
import db from '@/db/db.json';
const data = db['cottages'];

const initialState = {
  loading: 'idle',
  data: data,
  error: null,
};

export const apartmentsSlice = createSlice({
  name: 'cottages',
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
} = apartmentsSlice.actions;

export default apartmentsSlice.reducer;
