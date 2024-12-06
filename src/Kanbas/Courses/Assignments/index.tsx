import { BsGripVertical } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import DeleteAssignment from "./DeleteAssignment";
import { useEffect, useState } from "react";
import * as coursesClient from "../client";
import { setAssignments } from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector(
        (state: any) => state.assignmentsReducer
    );
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [assignmentToDelete, setAssignmentToDelete] = useState<any>();
    const dispatch = useDispatch();

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(
            cid as string
        );
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);

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

                {currentUser.role === "FACULTY" && (
                    <>
                        <button
                            type="button"
                            id="wd-add-assignment-group"
                            className="btn btn-outline-secondary text-nowrap ms-1"
                        >
                            + Group
                        </button>
                        <Link
                            id="wd-add-assignment-group"
                            className="btn btn-danger text-nowrap ms-1"
                            to={new Date().getTime().toString()}
                        >
                            + Assignment
                        </Link>
                    </>
                )}
            </div>
            <div className="wd-title p-0 mb-5 fs-5 border-gray">
                <div
                    id="wd-assignments-title"
                    className="wd-title p-3 ps-2 bg-secondary"
                >
                    <BsGripVertical className="me-2 fs-3" />
                    ASSIGNMENTS
                    {currentUser.role === "FACULTY" && (
                        <AssignmentsControlButtons />
                    )}
                </div>
                <ul
                    id="wd-assignment-list"
                    className="wd-lessons list-group rounded-0"
                >
                    {assignments.map((assignment: any) => (
                        <li
                            className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
                            key={assignment._id}
                        >
                            <BsGripVertical className="me-2 fs-3" />
                            <div className="d-flex flex-column flex-fill">
                                <Link
                                    className="text-black fw-semibold link-underline link-underline-opacity-0"
                                    to={`${assignment._id}`}
                                >
                                    {assignment.title}
                                </Link>
                                <div className="fs-6">
                                    <b className="text-danger">
                                        Multiple Modules
                                    </b>{" "}
                                    | <b>Not available until</b> May 6 at 12:00
                                    am |
                                </div>
                                <div className="fs-6">
                                    <b>Due</b> May 13 at 11:59 | 100 pts
                                </div>
                            </div>
                            <FaTrash
                                id="wd-delete_assignment-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#wd-delete-assignment-dialogue"
                                onClick={() =>
                                    setAssignmentToDelete(assignment)
                                }
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <DeleteAssignment assignment={assignmentToDelete} />
        </div>
    );
}
