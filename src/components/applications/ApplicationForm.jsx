import { useState } from "react";
import { workTypes, statuses } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { addApplication } from "../../features/application/applicationSlice";

const ApplicationForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [workType, setWorkType] = useState("");
  const [status, setStatus] = useState("applied");

  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applications.applications);

  function validateForm() {
    if (!companyName || !role || !workType || !status) {
      alert("Please fill in all fields before submitting the form.");
      return false;
    }
    return true;
  }

  function handleApplicationSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    //check for duplicate company and role combination
    const isDuplicate = applications.some(
      (application) =>
        application.company.trim().toLowerCase() ===
          companyName.trim().toLowerCase() &&
        application.role.trim().toLowerCase() === role.trim().toLowerCase(),
    );

    if (isDuplicate) {
      alert("This company and role already exist.");
      return;
    }

    //create a new application object and dispatch the addApplication action
    const newApplication = {
      company: companyName,
      role: role,
      workType: workType,
      status: status,
    };

    dispatch(addApplication(newApplication));
    setCompanyName("");
    setRole("");
    setWorkType("");
    setStatus("applied");
  }

  return (
    <div className="mb-5 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
      <h3 className="mb-3 font-semibold text-slate-800">New Application</h3>
      <form onSubmit={handleApplicationSubmit}>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Company"
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Role"
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <select
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
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
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none focus:border-sky-400"
          >
            {statuses.slice(1).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button className="cursor-pointer rounded-lg bg-sky-600 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 sm:col-span-2">
            Save Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
