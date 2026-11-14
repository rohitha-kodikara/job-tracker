import { applications } from "../../../data/data";
import ApplicationCard from "./application-card/ApplicationCard";

const ApplicationList = () => {
  return (
    <ul className="space-y-3">
      {applications.map((a) => (
        <ApplicationCard key={a.id} application={a} />
      ))}
    </ul>
  );
};

export default ApplicationList;
