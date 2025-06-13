import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../features/user/course-slice";

const courseStore = configureStore({
  reducer: {
    course: courseReducer,
  }
});