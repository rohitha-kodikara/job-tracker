import { interviews } from "../../../data/data";
import ListItem from "./list-item/ListItem";

const InterviewList = () => {
  return (
    <ul className="space-y-2">
      {interviews.map((item) => (
        <ListItem key={item.id} interview={item} />
      ))}
    </ul>
  );
};

export default InterviewList;
