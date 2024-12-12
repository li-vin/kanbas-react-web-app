import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import QuizList from "./QuizList";
import DetailsEditor from "./DetailsEditor";
import QuestionsList from "./Questions/QuestionList";

export default function QuizEditor() {
    const [editQuestions, setEditQuestions] = useState(false);
    return (
        <div>
            <button
                className={`btn btn-${
                    editQuestions ? "outline-" : ""
                }secondary me-1 mb-4`}
                onClick={() => setEditQuestions(false)}
            >
                Details
            </button>
            <button
                className={`btn btn-${
                    editQuestions ? "" : "outline-"
                }secondary me-1 mb-4`}
                onClick={() => setEditQuestions(true)}
            >
                Questions
            </button>
            {editQuestions ? <QuestionsList /> : <DetailsEditor />}
        </div>
    );
}
