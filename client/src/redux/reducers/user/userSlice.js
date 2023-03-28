import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: 'idle',
  data: {},
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    login: (state, action) => {
      state.data = action.payload;
    },
    logUp: (state, action) => {
      state.data = action.payload;
    },
  },
})
;

export const {
  logout,
  login,
  logUp,
} = userSlice.actions;

export default userSlice.reducer;
