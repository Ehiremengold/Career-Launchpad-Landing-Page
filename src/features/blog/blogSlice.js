import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../utils";


const initialState = {
  posts: [],
  post: [],
  isLoading: false,
  isError: false,
};

const getBlogPostDetail = createAsyncThunk(
  "blog/getBlogPostDetail",
  async (postSlug, thunkAPI) => {
    try {
      const response = await axios(`${ROOT_URL}/api/blog/post/${postSlug}/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getBlogPosts = createAsyncThunk(
  "blog/getBlogPosts",
  async (_, thunkAPI) => {
    try {
      console.log("fetching blog posts...");
      
      const response = await axios(`${ROOT_URL}/api/blog/posts/`);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
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

export {getBlogPosts, getBlogPostDetail}

export default blogSlice.reducer;
