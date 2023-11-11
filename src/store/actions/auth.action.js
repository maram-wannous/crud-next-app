import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("login/get", async () => { 
    return  await axiosInstance.get("https://mar-services.onrender.com/user")
    .then((res) => res.data);
  });