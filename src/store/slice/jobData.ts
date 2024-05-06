import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
export const fetchJobData = createAsyncThunk("fetchJobData", async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
});
export interface JobFilter {
  type: "role" | "location" | "experience" | "salary";
  value: string | number;
}
const jobDataSlice = createSlice({
  name: "jobData",
  initialState: {
    isLoading: false,
    data: null,
    filters: [] as JobFilter[],
  },

  reducers: {
    setJobRolesFilter: (state, action: PayloadAction<JobFilter>) => {
      state.filters.push(action.payload);
    },
    setExperienceFilter: (state, action: PayloadAction<JobFilter>) => {
      state.filters.push(action.payload);
    },
    setLocationFilter: (state, action: PayloadAction<JobFilter>) => {
      state.filters.push(action.payload);
    },
    setSalaryFilter: (state, action: PayloadAction<JobFilter>) => {
      state.filters.push(action.payload);
    },
    clearFilters: (state) => {
      state.filters = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchJobData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchJobData.rejected, (state) => {
      state.isLoading = true;
    });
  },
});
export const {
  setJobRolesFilter,
  setExperienceFilter,
  setLocationFilter,
  setSalaryFilter,
  clearFilters,
} = jobDataSlice.actions;

export default jobDataSlice.reducer;
