import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";
export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector(
        (state: any) => state.assignmentsReducer
    );
    const [assignment, setAssignment] = useState<any>(
        assignments.find((assignment: any) => assignment._id === aid) ?? {
            _id: aid,
            course: cid,
        }
    );
    const dispatch = useDispatch();
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name" className="form-label">
                Assignment Name
            </label>
            <input
                type="text"
                id="wd-name"
                className="form-control mb-3"
                value={assignment?.title}
                onChange={(e) => {
                    setAssignment({ ...assignment, title: e.target.value });
                }}
            />
            <textarea
                className="form-control mb-3"
                id="wd-description"
                style={{ height: "300px" }}
                value={assignment?.description}
                onChange={(e) => {
                    setAssignment({
                        ...assignment,
                        description: e.target.value,
                    });
                }}
            ></textarea>
            <div className="row mb-3">
                <label
                    htmlFor="wd-points"
                    className="col-sm-5 col-form-label text-end"
                >
                    Points
                </label>
                <div className="col">
                    <input
                        type="number"
                        className="form-control"
                        id="wd=points"
                        value={assignment?.points}
                        onChange={(e) => {
                            setAssignment({
                                ...assignment,
                                points: e.target.value,
                            });
                        }}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-group"
                    className="col-sm-5 col-form-label text-end"
                >
                    Assignment Group
                </label>
                <div className="col">
                    <select id="wd-group" className="form-select">
                        <option value="ASSIGNMENT">ASSIGNMENTS</option>
                        <option value="QUIZ">QUIZZES</option>
                        <option value="MODULE">MODULES</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-display-grade-as"
                    className="col-sm-5 col-form-label text-end"
                >
                    Points
                </label>
                <div className="col">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="PERCENT">Percentage</option>
                        <option value="SCORE">Score</option>
                        <option value="LETTER">Letter Grade</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-submission-type"
                    className="col-sm-5 col-form-label text-end"
                >
                    Submission Type
                </label>
                <div className="col form-control" style={{ margin: "12px" }}>
                    <select
                        id="wd-submission-type"
                        className="form-select mb-3"
                    >
                        <option value="ONLINE">Online</option>
                        <option value="IN-PERSON">In-person</option>
                    </select>
                    <label
                        htmlFor="wd-submission-options"
                        className="fw-bold mb-3"
                    >
                        Online Entry Options
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-text-entry"
                            className="form-check-input"
                        />
                        <label htmlFor="wd-text-entry" className="ms-2 mb-3">
                            Text Entry
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-website-url"
                            className="form-check-input"
                        />
                        <label htmlFor="wd-website-url" className="ms-2 mb-3">
                            Website URL
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-media-recordings"
                            className="form-check-input"
                        />
                        <label
                            htmlFor="wd-media-recordings"
                            className="ms-2 mb-3"
                        >
                            Media Recordings
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-student-annotation"
                            className="form-check-input"
                        />
                        <label
                            htmlFor="wd-student-annotation"
                            className="ms-2 mb-3"
                        >
                            Student Annotation
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-file-upload"
                            className="form-check-input"
                        />
                        <label htmlFor="wd-file-upload" className="ms-2 mb-3">
                            File Upload
                        </label>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-display-grade-as"
                    className="col-sm-5 col-form-label text-end"
                >
                    Assign
                </label>
                <div className="col form-control" style={{ margin: "12px" }}>
                    <label
                        htmlFor="wd-display-grade-as"
                        className="col-sm-5 col-form-label fs-5 fw-bolder"
                    >
                        Assign
                    </label>
                    <input
                        id="wd-assign-to"
                        className="form-control"
                        value="Everyone"
                    />
                    <label
                        htmlFor="wd-display-grade-as"
                        className="col-sm-5 col-form-label fs-5"
                    >
                        Due
                    </label>
                    <input
                        type="date"
                        id="wd-due-date"
                        className="form-control mb-3"
                        value={assignment?.due_date}
                        onChange={(e) => {
                            setAssignment({
                                ...assignment,
                                due_date: e.target.value,
                            });
                        }}
                    />
                    <div className="d-flex">
                        <div className="flex-fill me-2">
                            <label
                                htmlFor="wd-available-from"
                                className="text-nowrap fs-5"
                            >
                                Available from
                            </label>
                            <input
                                type="date"
                                id="wd-available-from"
                                className="form-control mb-3"
                                value={assignment?.available_from}
                                onChange={(e) => {
                                    setAssignment({
                                        ...assignment,
                                        available_from: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="flex-fill">
                            <label
                                htmlFor="wd-available-from"
                                className="text-nowrap fs-5"
                            >
                                Until
                            </label>
                            <input
                                type="date"
                                id="wd-available-from"
                                className="form-control mb-3"
                                value={assignment?.available_to}
                                onChange={(e) => {
                                    setAssignment({
                                        ...assignment,
                                        available_to: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
                <Link
                    type="button"
                    className="btn btn-outline-secondary me-1"
                    to={"../Assignments"}
                >
                    Cancel
                </Link>
                <Link
                    type="button"
                    className="btn btn-danger"
                    to={"../Assignments"}
                    onClick={() => {
                        console.log(assignment);
                        assignments.find((a: any) => a._id === aid)
                            ? dispatch(updateAssignment(assignment))
                            : dispatch(addAssignment(assignment));
                        console.log(assignments);
                    }}
                >
                    Save
                </Link>
            </div>
        </div>
    );
}
