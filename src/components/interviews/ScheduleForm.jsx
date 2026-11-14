import { applications, interviewTypes } from "../../data/data";

const ScheduleForm = () => {
  return (
    <div className="mb-5 space-y-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <select
        defaultValue=""
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
      >
        <option value="" disabled>
          Select application
        </option>
        {applications.map((a) => (
          <option key={a.id} value={a.id}>
            {a.company} - {a.role}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="date"
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
        />
        <select
          defaultValue=""
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
        >
          <option value="" disabled>
            Type
          </option>
          {interviewTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <button className="cursor-pointer w-full rounded-lg bg-sky-600 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
        Schedule Interview
      </button>
    </div>
  );
};

export default ScheduleForm;
