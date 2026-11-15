import { useDispatch } from "react-redux";
import { statuses, statusStyles } from "../../../../data/data";
import {
  deleteApplication,
  updateApplicationStatus,
} from "../../../../features/application/applicationSlice";
import DeleteConfirmation from "./DeleteConfirmation";

const UserActions = ({ application }) => {
  const dispatch = useDispatch();

  const handleApplicationStatus = (applicationId, newStatus) => {
    dispatch(updateApplicationStatus(applicationId, newStatus));
  };

  function handleDeleteApplication(applicationId) {
    dispatch(deleteApplication(applicationId));
  }

  return (
    <>
      <select
        value={application.status}
        onChange={(e) =>
          handleApplicationStatus(application.id, e.target.value)
        }
        className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 outline-none ${statusStyles[application.status]}`}
      >
        {statuses.slice(1).map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/*----------Delete Dialog box-------------*/}
      <DeleteConfirmation
        item={application}
        onDelete={handleDeleteApplication}
      />
      {/*----------Delete Dialog box-------------*/}
    </>
  );
};

export default UserActions;
