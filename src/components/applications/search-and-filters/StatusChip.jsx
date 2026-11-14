const StatusChip = ({ status, i }) => {
  return (
    <button
      key={status}
      className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition ${
        i === 0
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
      }`}
    >
      {status}
    </button>
  );
};

export default StatusChip;
