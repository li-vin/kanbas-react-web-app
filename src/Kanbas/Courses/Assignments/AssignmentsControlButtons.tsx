import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
export default function AssignmentsControlButtons() {
    return (
        <div className="float-end">
            <button type="button" className="btn btn-outline-secondary me-2">
                40% of Total
            </button>
            <FaPlus />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
