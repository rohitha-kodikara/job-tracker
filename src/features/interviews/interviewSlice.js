import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  interviews: [],
};

const interviewSlice = createSlice({
  name: "interviews",
  initialState,
  reducers: {
    //add interview to the list of interviews
    addInterview: {
      prepare: (interview) => ({
        payload: {
          id: nanoid(),
          ...interview,
        },
      }),

      reducer: (state, action) => {
        state.interviews.unshift(action.payload);
      },
    },

    //update interview status to done
    updateInterviewStatus: {
      prepare: (id, done) => ({
        payload: {
          id,
          done,
        },
      }),
      reducer: (state, action) => {
        const { id, done } = action.payload;
        const interview = state.interviews.find(
          (interview) => interview.id === id,
        );

        if (interview) {
          interview.done = done;
        }
      },
    },
    //delete interview from the list of interviews
    removeInterview: {
      prepare: (id) => ({
        payload: {
          id,
        },
      }),
      reducer: (state, action) => {
        const { id } = action.payload;
        state.interviews = state.interviews.filter(
          (interview) => interview.id !== id,
        );
      },
    },
  },
});

export const { addInterview, updateInterviewStatus, removeInterview } =
  interviewSlice.actions;
export default interviewSlice.reducer;
