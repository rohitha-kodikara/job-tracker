import { statuses, statusStyles } from "../../../../data/data";

const UserActions = ({
  application,
  applicationStatus,
  setApplicationStatus,
}) => {
  return (
    <>
      <select
        value={applicationStatus}
        onChange={(e) => setApplicationStatus(e.target.value)}
        className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 outline-none ${statusStyles[application.status]}`}
      >
        {statuses.slice(1).map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <button className="cursor-pointer rounded-lg px-2 py-1 text-xs font-medium text-red-500 transition hover:bg-red-50">
        Delete
      </button>
    </>
  );
};

export default UserActions;
