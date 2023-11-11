import { createSlice } from "@reduxjs/toolkit";
import { deleteCourse, get, getById } from "../actions/coursers.action";

const coursesReducer = createSlice({
  name: "courses",
  initialState: {
    data: [],
    courseById: {},
    isLoading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
        .addCase(get.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(get.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(get.rejected, (state) => {
            state.isLoading = false;
        });

    builder
        .addCase(getById.fulfilled, (state, action) => {
            state.courseById = action.payload;
        });
  },
});

export default coursesReducer.reducer;
