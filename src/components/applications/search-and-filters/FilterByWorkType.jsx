import { workTypes } from "../../../data/data";

const FilterByWorkType = ({ updateSearchParams, workType }) => {
  return (
    <select
      value={workType}
      onChange={(e) => updateSearchParams("work-type", e.target.value)}
      className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 shadow-sm outline-none"
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
  );
};

export default FilterByWorkType;
