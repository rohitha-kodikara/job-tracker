const SearchBox = ({ updateSearchParams, searchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search company or role..."
      className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm outline-none focus:border-sky-400"
      value={searchQuery}
      onChange={(e) => updateSearchParams("app-search", e.target.value)}
    />
  );
};

export default SearchBox;
