import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "./features/blogs/blogsSlice";
import blogSlice from "./features/singleBlog/blogSlice";
import filterSlice from "./features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    blog: blogSlice,
    filter: filterSlice,
  },
});
