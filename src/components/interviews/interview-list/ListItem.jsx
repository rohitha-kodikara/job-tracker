import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeInterview,
  updateInterviewStatus,
} from "@/features/interviews/interviewSlice";
import { useSelector } from "react-redux";
import DeleteConfirmation from "@/components/applications/application-cards/application-card/DeleteConfirmation";

const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  const interviewStatus = useSelector(
    (state) =>
      state.interviews.interviews.find((interview) => interview.id === item.id)
        ?.done,
  );
  console.log(interviewStatus);

  function handleUpdateInterviewStatus(itemId, newStatus) {
    dispatch(updateInterviewStatus(itemId, newStatus));
  }

  function handleDeleteInterview(itemId) {
    dispatch(removeInterview(itemId));
  }

  return (
    <li
      key={item.id}
      className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-sky-300 hover:bg-white"
    >
      <div className="flex items-start justify-between gap-2">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={interviewStatus || false}
            onChange={(e) =>
              handleUpdateInterviewStatus(item.id, e.target.checked)
            }
            className="mt-1 h-4 w-4 accent-sky-600"
          />
          <div>
            <p
              className={`text-sm font-semibold ${
                interviewStatus
                  ? "text-slate-400 line-through"
                  : "text-slate-800"
              }`}
            >
              {item.company}
            </p>
            <p className="text-xs text-slate-500">{item.role}</p>
          </div>
        </label>
        <DeleteConfirmation item={item} onDelete={handleDeleteInterview} />
      </div>

      <div className="mt-2 flex items-center justify-between pl-7 text-xs">
        <span className="text-slate-400">{item.date}</span>
        <span className="rounded-full bg-sky-100 px-2 py-0.5 font-semibold text-sky-700">
          {item.type}
        </span>
      </div>
    </li>
  );
};

export default ListItem;
