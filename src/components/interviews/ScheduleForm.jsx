import { interviewTypes } from "../../data/data";
import useScheduleForm from "../hooks/ScheduleFormHook";

const ScheduleForm = () => {
  const {
    application,
    setApplication,
    scheduledDate,
    setScheduledDate,
    interviewType,
    setInterviewType,
    handleSubmitInterviewForm,
    allApplications,
  } = useScheduleForm();

  return (
    <div className="mb-5 space-y-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <form
        action=""
        onSubmit={handleSubmitInterviewForm}
        className="space-y-3"
      >
        <select
          value={application}
          onChange={(e) => setApplication(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
        >
          <option value="" disabled>
            {allApplications.length === 0
              ? "No applications available"
              : "Select an application"}
          </option>
          {allApplications.map((application) => (
            <option key={application.id} value={application.id}>
              {application.company} - {application.role}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
          />
          <select
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
            value={interviewType}
            onChange={(e) => setInterviewType(e.target.value)}
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
      </form>
    </div>
  );
};

export default ScheduleForm;
