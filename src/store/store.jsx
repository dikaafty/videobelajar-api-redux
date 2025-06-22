import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../features/user/course-slice";

export const courseStore = configureStore({
  reducer: {
    course: courseReducer,
  }
});