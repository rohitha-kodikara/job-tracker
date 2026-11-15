import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
  searchQuery: "",
  workType: "All Work Types",
  status: "All",
};

const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    //add a new application
    addApplication: {
      prepare: (application) => ({
        payload: {
          id: nanoid(),
          ...application,
        },
      }),

      reducer: (state, action) => {
        state.applications.push(action.payload);
      },
    },
    //update application status
    updateApplicationStatus: {
      prepare: (id, status) => ({
        payload: { id, status },
      }),

      reducer: (state, action) => {
        const { id, status } = action.payload;
        const application = state.applications.find((app) => app.id === id);

        if (application) {
          application.status = status;
        }
      },
    },
  },
});

export const { addApplication, updateApplicationStatus } =
  applicationSlice.actions;
export default applicationSlice.reducer;
