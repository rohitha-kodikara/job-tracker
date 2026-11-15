import UserActions from "./UserActions";

const ApplicationCard = ({ application }) => {
  return (
    <li
      key={application.id}
      className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200 transition hover:shadow-lg"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-lg font-bold text-white">
        {application.company[0]}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-slate-800">
          {application.company}
        </p>
        <p className="truncate text-sm text-slate-500">{application.role}</p>
        <span className="mt-1 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
          {application.workType}
        </span>
      </div>

      <UserActions application={application} />
    </li>
  );
};

export default ApplicationCard;
