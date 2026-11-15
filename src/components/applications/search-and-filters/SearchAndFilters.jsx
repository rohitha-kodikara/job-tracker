import FilterByWorkType from "./FilterByWorkType";
import SearchBox from "./SearchBox";
import StatusChipList from "./StatusChipList";

const SearchAndFilters = ({
  updateSearchParams,
  searchQuery,
  workType,
  applicationStatus,
}) => {
  return (
    <>
      <div className="mb-3 flex flex-wrap gap-3">
        <SearchBox
          updateSearchParams={updateSearchParams}
          searchQuery={searchQuery}
        />
        <FilterByWorkType
          updateSearchParams={updateSearchParams}
          workType={workType}
        />
      </div>

      <StatusChipList
        updateSearchParams={updateSearchParams}
        applicationStatus={applicationStatus}
      />
    </>
  );
};

export default SearchAndFilters;
