import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const get = createAsyncThunk("courses/get", async () => {
  return await axiosInstance.get("https://mar-services.onrender.com/courses")
  .then((res) => res.data);
});

export const getById = createAsyncThunk("courses/get-by-id", async (id) => {
  return await axiosInstance.get(`https://mar-services.onrender.com/courses/${id}`).then((res) => {
    return res.data;
  });
});
export const addNewCourse = createAsyncThunk(
  "courses/add",
  async (data) => {
    return await axiosInstance.post("https://mar-services.onrender.com/courses", data).then((res) => {
      return res.data;
    });
  }
);
export const editCourse = createAsyncThunk(
  "courses/edit",
  async (data) => {
    return await axiosInstance.patch(`https://mar-services.onrender.com/courses/${id}`, data).then((res) => {
      return res.data;
    });
  }
);
export const deleteCourse = createAsyncThunk("courses/delet", async (id) => {
  return await axiosInstance.delete(`https://mar-services.onrender.com/courses/${id}`)
  .then((res) => res.data);
});