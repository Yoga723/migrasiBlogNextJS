import { BlogArticleProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// Redux setting untuk blogList
const blogListSlice = createSlice({
  name: "blogList",
  initialState: {
    articles: [] as BlogArticleProps[],
  },
  reducers: {
    updateBlogList: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { updateBlogList } = blogListSlice.actions;
export default blogListSlice.reducer;
