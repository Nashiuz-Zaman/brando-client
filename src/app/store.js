//redux
import { configureStore } from "@reduxjs/toolkit";
// reducers
import mobileNavReducer from "../features/mobileNav/mobileNavSlice";
import themeReducer from "../features/theme/themeSlice";

// features

export const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
    theme: themeReducer,
  },
});
