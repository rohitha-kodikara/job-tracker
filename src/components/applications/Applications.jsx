import ApplicationForm from "./ApplicationForm";
import { applications, statuses, statusStyles } from "../../data/data";
import SearchAndFilters from "./search-and-filters/SearchAndFilters";
import ApplicationList from "./application-cards/ApplicationList";

const Applications = ({ showForm }) => {
  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Applications</h2>
          <p className="text-sm text-slate-500">
            Track every job you apply for
          </p>
        </div>
        <button className="cursor-pointer rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-sky-700">
          {showForm ? "Close form" : "+ Add Application"}
        </button>
      </div>

      {/* Add application form */}
      {showForm && <ApplicationForm />}

      {/* Search + filters */}
      <SearchAndFilters />

      {/* Application cards */}
      <ApplicationList />

      {/* Empty state (search / filter walin kisima application ekak nathnam) */}
      {/* <p className="py-10 text-center text-sm text-slate-400">No applications found</p> */}
    </section>
  );
};

export default Applications;
