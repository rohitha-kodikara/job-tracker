import ApplicationCard from "./application-card/ApplicationCard";
const ApplicationList = ({ filteredApplications, handleApplicationStatus }) => {
  return (
    <ul className="space-y-3">
      {filteredApplications.map((a) => (
        <ApplicationCard
          key={a.id}
          application={a}
          handleApplicationStatus={handleApplicationStatus}
        />
      ))}
    </ul>
  );
};

export default ApplicationList;
