import { statuses } from "../../../data/data";
import StatusChip from "./StatusChip";

const StatusChipList = () => {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {statuses.map((status, i) => (
        <StatusChip key={status} status={status} index={i} />
      ))}
    </div>
  );
};

export default StatusChipList;
