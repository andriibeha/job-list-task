import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type JobStatus = "loading" | "success" | "error";

export type JobsListType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
  pictures: string[];
};

interface LaunchSlickState {
  items: JobsListType[];
  status: JobStatus;
}

const initialState: LaunchSlickState = {
  items: [],
  status: "loading",
};

const TOKEN_KEY = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

//NEED TO FIX ANY
export const fetchJobsData: any = createAsyncThunk(
  "jobs/fetchJobsData",
  async () => {
    const { data } = await axios({
      method: "post",
      url: `https://api.json-generator.com/templates/ZM1r0eic3XEy/data`,
      headers: {
        Authorization: "Bearer " + TOKEN_KEY,
      },
      data: {},
    });

    return data;
  }
);

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setLaunch(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchJobsData.pending]: (state, action) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchJobsData.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchJobsData.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setLaunch } = jobsSlice.actions;

export default jobsSlice.reducer;
