import { createSlice } from '@reduxjs/toolkit'

export const emailSlice = createSlice({
  name:"email",
  initialState: {
    data: { name:"abc"}
  },
  reducers: {
    clear(state) {
      state.data.email = "";
    },
    setEmail(state,action) {
      state.data.email = action.payload.email;
    },
  },
});

export const dispatchEmail = emailSlice.actions;