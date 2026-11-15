import ApplicationForm from "./ApplicationForm";
import SearchAndFilters from "./search-and-filters/SearchAndFilters";
import ApplicationList from "./application-cards/ApplicationList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { applications } from "../../data/data";

const Applications = () => {
  const [displayAppForm, setDisplayAppForm] = useState(true);

  const [searchParam, setSearchParam] = useSearchParams("");

  const [applicationList, setApplicationList] = useState(applications);
  function handleApplicationStatus(applicationId, newStatus) {
    setApplicationList((prevApplications) =>
      prevApplications.map((application) =>
        application.id === applicationId
          ? { ...application, status: newStatus }
          : application,
      ),
    );
  }

  const searchQuery = searchParam.get("app-search") || "";
  const workType = searchParam.get("work-type") || "All Work Types";
  const applicationStatus = searchParam.get("status") || "All";

  function updateSearchParams(key, value) {
    const newSearchParams = new URLSearchParams(searchParam);
    if (value == "" || value == null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }
    setSearchParam(newSearchParams);
  }

  const filterApplications = applicationList.filter((application) => {
    const matchSearch =
      application.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      application.role.toLowerCase().includes(searchQuery.toLowerCase());

    const workTypeMatch =
      application.workType.toLowerCase() === workType.toLowerCase() ||
      workType === "All Work Types";
    const statusMatch =
      application.status.toLowerCase() === applicationStatus.toLowerCase() ||
      applicationStatus === "All";

    return matchSearch && workTypeMatch && statusMatch;
  });
  console.log(filterApplications);
  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Applications</h2>
          <p className="text-sm text-slate-500">
            Track every job you apply for
          </p>
        </div>
        <button
          className="cursor-pointer rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-sky-700"
          onClick={() => setDisplayAppForm((open) => !open)}
        >
          {displayAppForm ? "Close form" : "+ Add Application"}
        </button>
      </div>

      {/* Add application form */}
      {displayAppForm && <ApplicationForm />}

      {/* Search + filters */}
      <SearchAndFilters
        updateSearchParams={updateSearchParams}
        searchQuery={searchQuery}
        workType={workType}
        applicationStatus={applicationStatus}
      />
      <ApplicationList
        filteredApplications={filterApplications}
        handleApplicationStatus={handleApplicationStatus}
      />

      {/* Empty state (search / filter walin kisima application ekak nathnam) */}
      {/* <p className="py-10 text-center text-sm text-slate-400">No applications found</p> */}
    </section>
  );
};

export default Applications;
