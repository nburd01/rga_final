import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name:"contact",
  initialState: {
    data: { email:"roazhongoalacademy@gmail.com", téléphone:"0688350498"}
  },
  reducers: {
    clear(state) {
      state.data.email = "";
      state.data.téléphone = "";
    },
    setReduxContact(state,action) {
      state.data.email = action.payload.email;
      state.data.téléphone = action.payload.téléphone;
    },
  },
});

export const {setReduxContact} = contactSlice.actions;

export default contactSlice.reducer;
