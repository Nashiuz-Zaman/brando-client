// import
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

const { actions, reducer } = themeSlice;

export const { changeTheme } = actions;
export default reducer;
