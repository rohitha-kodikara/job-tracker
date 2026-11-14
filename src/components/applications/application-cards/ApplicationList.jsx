import ApplicationCard from "./application-card/ApplicationCard";
const ApplicationList = ({ filteredApplications }) => {
  return (
    <ul className="space-y-3">
      {filteredApplications.map((a) => (
        <ApplicationCard key={a.id} application={a} />
      ))}
    </ul>
  );
};

export default ApplicationList;
