import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name:"contact",
  initialState: {
    data: { email:"abc", téléphone:"0712345678"}
  },
  reducers: {
    clear(state) {
      state.data.email = "";
      state.data.téléphone = "";
    },
    setEmail(state,action) {
      state.data.email = action.payload.email;
    },
    setTelephone(state,action) {
      state.data.téléphone = action.payload.téléphone;
    },
  },
});

export const {dispatchContact} = contactSlice.actions;

export default contactSlice;
