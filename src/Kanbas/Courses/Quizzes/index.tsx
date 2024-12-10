import { useState } from "react";
import { BsGripVertical } from "react-icons/bs";

export default function Quizzes() {
    const [quizzes, setQuizzes] = useState([
        {
            _id: 0,
            title: "Sample",
            availableDate: "1-1-1111",
            availableUntilDate: "2-2-2222",
            dueDate: "2-2-2222",
            points: 2,
            questions: 4,
            score: 0,
        },
    ]);

    return (
        <div id="wd-quizzes">
            <div className="wd-title p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    Quizzes
                </div>
                <ul id="wd-quizzes-list" className="list-group rounded-0">
                    {quizzes.map((quiz: any) => (
                        <li
                            className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex align-items-center"
                            key={quiz._id}
                        >
                            <BsGripVertical className="me-2 fs-3" />
                            <div className="d-flex flex-column flex-fill">
                                <span className="text-black link-underline link-underline-opacity-0">
                                    {quiz.title}
                                </span>
                                <div className="fs-6">
                                    Available | Due | {quiz.points} pts |{" "}
                                    {quiz.questions} Questions
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
