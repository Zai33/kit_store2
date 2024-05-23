import { configureStore } from "@reduxjs/toolkit";
import saveListReducer from "../features/saveList.js";
import userSliceReducer from "../features/UserSlice.js";

export const store = configureStore({
  reducer: {
    saveList: saveListReducer,
    user: userSliceReducer,
  },
});
