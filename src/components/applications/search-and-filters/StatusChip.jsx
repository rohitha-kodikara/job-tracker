const StatusChip = ({ status, i, applicationStatus, updateSearchParams }) => {
  return (
    <button
      value={applicationStatus}
      onClick={() => updateSearchParams("status", status)}
      key={status}
      className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition ${
        i === 0
          ? "bg-slate-900 text-white"
          : "bg-lime-200 border-1 border-lime-300 text-slate-600 ring-1 ring-slate-200 hover:bg-amber-600 hover:text-white"
      }`}
    >
      {status}
    </button>
  );
};

export default StatusChip;
