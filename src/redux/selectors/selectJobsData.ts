import { RootState } from "../store";

export const selectJobsData = (state: RootState) => state.jobs;

export const selectJobDetail = (state: RootState) => state.jobs.item;
