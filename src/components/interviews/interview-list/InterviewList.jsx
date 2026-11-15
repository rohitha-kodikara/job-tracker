import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const InterviewList = () => {
  const interviews = useSelector((state) => state.interviews.interviews);
  const applications = useSelector((state) => state.applications.applications);

  const interviewItems = interviews.map((interview) => {
    const application = applications.find(
      (app) => app.id === interview.applicationId,
    );

    return {
      ...interview,
      company: application?.company ?? "Unknown company",
      role: application?.role ?? "Unknown role",
      date: interview.scheduledDate,
      type: interview.interviewType,
    };
  });

  return (
    <ul className="space-y-2">
      {interviewItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default InterviewList;
