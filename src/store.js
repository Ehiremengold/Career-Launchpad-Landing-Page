import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/blogSlice.js";
import careerpathReducer from "./features/careerpaths/careerpathsSlice.js";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    careerpath: careerpathReducer,
  },
});