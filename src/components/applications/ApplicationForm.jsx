import { workTypes, statuses } from "../../data/data";

const ApplicationForm = () => {
  return (
    <div className="mb-5 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
      <h3 className="mb-3 font-semibold text-slate-800">New Application</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Company"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400"
        />
        <input
          type="text"
          placeholder="Role"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400"
        />
        <select
          defaultValue=""
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
        >
          <option value="" disabled>
            Work type
          </option>
          {workTypes.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
        <select
          defaultValue="Applied"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
        >
          {statuses.slice(1).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button className="cursor-pointer rounded-lg bg-sky-600 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 sm:col-span-2">
          Save Application
        </button>
      </div>
    </div>
  );
};

export default ApplicationForm;
