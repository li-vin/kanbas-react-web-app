import { useParams } from "react-router";
import * as db from "../../Database";
export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignments = db.assignments;
    const assignment = assignments.find((assignment) => assignment._id === aid);
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
            />
            <textarea
                className="form-control mb-3"
                id="wd-description"
                style={{ height: "300px" }}
            >
                The assignment is available online. Submit a link to the landing
                page of your Web application running on Netlify. The landing
                page should include the following: Your full name and section
                Links to each of the lab assignments Link to the Kanbas
                application Links to all relevant source code repositories The
                Kanbas application should include a link to navigate back to the
                landing page.
            </textarea>
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
                        value={100}
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
                        value="2024-05-13"
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
                                value="2024-05-06"
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
                                value="2024-05-28"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
                <button
                    type="button"
                    className="btn btn-outline-secondary me-1"
                >
                    Cancel
                </button>
                <button type="button" className="btn btn-danger">
                    Save
                </button>
            </div>
        </div>
    );
}
