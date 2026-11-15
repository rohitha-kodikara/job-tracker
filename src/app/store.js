import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/application/applicationSlice";
import interviewReducer from "../features/interviews/interviewSlice";

const store = configureStore({
  reducer: {
    applications: applicationReducer,
    interviews: interviewReducer,
  },
});

export default store;
