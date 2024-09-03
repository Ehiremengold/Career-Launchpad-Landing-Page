import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../utils";

const initialState = {
  careerpaths: [],
  isLoading: false,
  isError: false,
  errMsg: "",
};

export const getCareerPaths = createAsyncThunk(
  "paths/getCareerPaths",
  async (_, thunkAPI) => {
    try {
      const resp = await axios(`${ROOT_URL}/api/careerpaths/`);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const careerpathsSlice = createSlice({
  name: "careerpaths",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCareerPaths.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCareerPaths.fulfilled, (state, action) => {
        state.isLoading = false;
        state.careerpaths = action.payload;
      })
      .addCase(getCareerPaths.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errMsg = action.payload;
      });
  },
});

export default careerpathsSlice.reducer;
