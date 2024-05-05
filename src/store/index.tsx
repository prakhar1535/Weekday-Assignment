import { configureStore } from "@reduxjs/toolkit";
import jobDataReducer from "./slice/jobData";
export const store = configureStore({
  reducer: {
    jobs: jobDataReducer,
  },
});
