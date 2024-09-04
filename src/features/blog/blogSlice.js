import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../utils";

const initialState = {
  posts: [],
  post: [],
  more: false,
  isLoading: false,
  isError: false,
  page: 1,
};

const getBlogPostDetail = createAsyncThunk(
  "blog/getBlogPostDetail",
  async (postSlug, thunkAPI) => {
    try {
      const response = await axios(`${ROOT_URL}/api/blog/post/${postSlug}/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getBlogPosts = createAsyncThunk(
  "blog/getBlogPosts",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios(`${ROOT_URL}/api/blog/posts/`, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = [...state.posts, ...action.payload.results];
        action.payload.next ? (state.more = true) : (state.more = false);
      })
      .addCase(getBlogPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBlogPostDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogPostDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(getBlogPostDetail.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export { getBlogPosts, getBlogPostDetail };

export const { incrementPage } = blogSlice.actions;

export default blogSlice.reducer;
