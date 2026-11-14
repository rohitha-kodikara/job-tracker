import { statuses } from "../../../data/data";
import StatusChip from "./StatusChip";

const StatusChipList = ({ updateSearchParams }) => {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {statuses.map((status, i) => (
        <StatusChip
          key={status}
          status={status}
          index={i}
          updateSearchParams={updateSearchParams}
        />
      ))}
    </div>
  );
};

export default StatusChipList;
