import React from "react";

const SearchBox = () => {
  return (
    <input
      type="text"
      placeholder="Search company or role..."
      className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm outline-none focus:border-sky-400"
    />
  );
};

export default SearchBox;
