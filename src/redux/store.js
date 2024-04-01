import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "./features/blogs/blogsSlice";
import blogSlice from "./features/singleBlog/blogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    blog: blogSlice,
  },
});
