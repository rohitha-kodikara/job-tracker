import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/application/applicationSlice";

const store = configureStore({
  reducer: {
    applications: applicationReducer,
  },
});

export default store;
