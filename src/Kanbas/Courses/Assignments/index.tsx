import { BsGripVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { IoSearch } from "react-icons/io5";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div className="d-flex justify-content-end mb-2">
                <div
                    id="wd-search-assignment"
                    className="align-items-center flex-fill"
                >
                    <IoSearch
                        style={{
                            position: "relative",
                            left: "20px",
                            zIndex: 3,
                        }}
                    />
                    <input
                        className="ps-4"
                        style={{ position: "relative", left: "0px" }}
                        type="text"
                        placeholder="Search..."
                    />
                </div>
                <button
                    type="button"
                    id="wd-add-assignment-group"
                    className="btn btn-outline-secondary text-nowrap ms-1"
                >
                    + Group
                </button>
                <button
                    type="button"
                    id="wd-add-assignment-group"
                    className="btn btn-danger text-nowrap ms-1"
                >
                    + Assignment
                </button>
            </div>
            <div className="wd-title p-0 mb-5 fs-5 border-gray">
                <div
                    id="wd-assignments-title"
                    className="wd-title p-3 ps-2 bg-secondary"
                >
                    <BsGripVertical className="me-2 fs-3" />
                    ASSIGNMENTS
                    <AssignmentsControlButtons />
                </div>
                <ul
                    id="wd-assignment-list"
                    className="wd-lessons list-group rounded-0"
                >
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <div className="d-flex flex-column flex-fill">
                            <Link
                                id="wd-assignment-link"
                                className="text-black fw-semibold link-underline link-underline-opacity-0"
                                to="/Kanbas/Courses/1234/Assignments/123"
                            >
                                A1 - ENV + HTML
                            </Link>
                            <div className="fs-6">
                                <b className="text-danger">Multiple Modules</b>{" "}
                                | <b>Not available until</b> May 6 at 12:00 am |
                            </div>
                            <div className="fs-6">
                                <b>Due</b> May 13 at 11:59 | 100 pts
                            </div>
                        </div>
                        <AssignmentControlButtons />
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <div className="d-flex flex-column flex-fill">
                            <Link
                                id="wd-assignment-link"
                                className="text-black fw-semibold link-underline link-underline-opacity-0"
                                to="/Kanbas/Courses/1234/Assignments/123"
                            >
                                A2 - CSS + BOOTSTRAP
                            </Link>
                            <div className="fs-6">
                                <b className="text-danger">Multiple Modules</b>{" "}
                                | <b>Not available until</b> May 13 at 12:00 am
                                |
                            </div>
                            <div className="fs-6">
                                <b>Due</b> May 20 at 11:59 | 100 pts
                            </div>
                        </div>
                        <AssignmentControlButtons />
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <div className="d-flex flex-column flex-fill">
                            <Link
                                id="wd-assignment-link"
                                className="text-black fw-semibold link-underline link-underline-opacity-0"
                                to="/Kanbas/Courses/1234/Assignments/123"
                            >
                                A3 - JAVASCRIPT + REACT
                            </Link>
                            <div className="fs-6">
                                <b className="text-danger">Multiple Modules</b>{" "}
                                | <b>Not available until</b> May 20 at 12:00 am
                                |
                            </div>
                            <div className="fs-6">
                                <b>Due</b> May 27 at 11:59 | 100 pts
                            </div>
                        </div>
                        <AssignmentControlButtons />
                    </li>
                </ul>
            </div>
        </div>
    );
}
