export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing
                page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENT">ASSIGNMENTS</option>
                            <option value="QUIZ">QUIZZES</option>
                            <option value="MODULE">MODULES</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-display-grade-as">
                            Display Grade as
                        </label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENT">Percentage</option>
                            <option value="SCORE">Score</option>
                            <option value="LETTER">Letter Grade</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-submission-type">
                            Submission Type
                        </label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">Online</option>
                            <option value="IN-PERSON">In-person</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        Online Entry Options
                        <br />
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-text-entry"
                        />
                        <label htmlFor="wd-text-entry">Text Entry</label>
                        <br />
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-website-url"
                        />
                        <label htmlFor="wd-website-url">Website URL</label>
                        <br />
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-media-recordings"
                        />
                        <label htmlFor="wd-media-recordings">
                            Media Recordings
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-student-annotation"
                        />
                        <label htmlFor="wd-student-annotation">
                            Student Annotation
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            name="check-online-entry"
                            id="wd-file-upload"
                        />
                        <label htmlFor="wd-file-upload">File Upload</label>
                        <br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>
                        <br />
                        <input id="wd-assign-to" placeholder="Everyone" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label>
                        <br />
                        <input
                            type="date"
                            id="wd-due-date"
                            placeholder="2024-05-13"
                        />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from">
                                        Available from
                                    </label>
                                </td>
                                <td>
                                    <label htmlFor="wd-available-until">
                                        Until
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="date"
                                        id="wd-available-from"
                                        placeholder="2024-05-06"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        id="wd-available-until"
                                        placeholder="2024-05-28"
                                    />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr />
            <button>Cancel</button> <button>Save</button>
        </div>
    );
}
