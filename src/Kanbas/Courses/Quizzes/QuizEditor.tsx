import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

export default function QuizEditor() {
    const [editQuestions, setEditQuestions] = useState(false);
    const { pathname } = useLocation();
    return (
        <div>
            <button
                className={`btn btn-${
                    editQuestions ? "outline-" : ""
                }secondary me-1`}
                onClick={() => setEditQuestions(false)}
            >
                Details
            </button>
            <button
                className={`btn btn-${
                    editQuestions ? "" : "outline-"
                }secondary me-1`}
                onClick={() => setEditQuestions(true)}
            >
                Questions
            </button>
            <Routes>
                <Route path="/" element={<Navigate to="Questions" />} />
                <Route path="Details" element={<hr />} />
                <Route path="Questions" element={<div>Questions</div>} />
            </Routes>
        </div>
    );
}
