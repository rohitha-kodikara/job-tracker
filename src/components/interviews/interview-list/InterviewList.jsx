import { interviews } from "../../../data/data";
import ListItem from "../../interviews/interview-list/ListItem";

const InterviewList = () => {
  return (
    <ul className="space-y-2">
      {interviews.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default InterviewList;
