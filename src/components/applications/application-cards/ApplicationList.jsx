import ApplicationCard from "./application-card/ApplicationCard";
const ApplicationList = ({ filteredApplications }) => {
  return (
    <ul className="space-y-3">
      {filteredApplications.length === 0 && (
        <li className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200 transition hover:shadow-lg">
          <p className="text-sm text-slate-500">
            No applications found. Try adjusting your search or filters.
          </p>
        </li>
      )}
      {filteredApplications.map((a) => (
        <ApplicationCard key={a.id} application={a} />
      ))}
    </ul>
  );
};

export default ApplicationList;
