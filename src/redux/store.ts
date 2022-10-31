import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import jobs from "./slices/JobsSlice";

export const store = configureStore({
  reducer: {
    jobs,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
