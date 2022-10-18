import {createSlice} from '@reduxjs/toolkit'

export const UrlSlice = createSlice({
    name: "url",
    initialState:{value: {url: "https://www.clickandsport.fr/content/131-roazhon-goal-academy"}},
    reducers: {
        NavUrl: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { NavUrl } = UrlSlice.actions;
export default UrlSlice.reducer