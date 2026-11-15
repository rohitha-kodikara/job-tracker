import InterviewList from "./interview-list/InterviewList";
import ScheduleForm from "./ScheduleForm";

const Interviews = () => {
  return (
    <aside className="h-fit rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200 lg:sticky lg:top-24">
      <h2 className="mb-4 text-xl font-bold text-slate-800">Interviews</h2>

      {/* Schedule form */}
      <ScheduleForm />
      <InterviewList />

      {/* Empty state (interviews nathnam) */}
      {/* <p className="py-6 text-center text-sm text-slate-400">No interviews scheduled</p> */}
    </aside>
  );
};

export default Interviews;
