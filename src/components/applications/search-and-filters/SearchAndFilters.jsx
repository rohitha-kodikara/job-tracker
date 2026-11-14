import FilterByWorkType from "./FilterByWorkType";
import SearchBox from "./SearchBox";
import StatusChipList from "./StatusChipList";

const SearchAndFilters = () => {
  return (
    <>
      <div className="mb-3 flex flex-wrap gap-3">
        <SearchBox />
        <FilterByWorkType />
      </div>

      <StatusChipList />
    </>
  );
};

export default SearchAndFilters;
