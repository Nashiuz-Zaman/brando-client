//redux
import { configureStore } from "@reduxjs/toolkit";
import mobileNavReducer from "../features/MobileNav/mobileNavSlice";

// features

export const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
  },
});
