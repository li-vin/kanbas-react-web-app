import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";
import { setQuizzes, updateQuiz } from "./reducer";
import { Link } from "react-router-dom";
import Editor from "react-simple-wysiwyg";

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [quiz, setQuiz] = useState<any>(
        quizzes.find((quiz: any) => quiz._id === qid && quiz.course === cid)
    );
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
        setQuiz(
            quizzes.find((quiz: any) => quiz._id === qid && quiz.course === cid)
        );
    };
    useEffect(() => {
        fetchQuizzes();
    }, []);

    const saveQuiz = async (publish: boolean) => {
        if (publish) {
            await quizzesClient.updateQuiz({ ...quiz, published: true });
        } else {
            await quizzesClient.updateQuiz(quiz);
        }
        dispatch(updateQuiz(quiz));
    };

    return (
        <div className="w-75">
            <input
                type="text"
                id="wd-name"
                className="form-control mb-3 w-25"
                value={quiz?.title}
                onChange={(e) => {
                    setQuiz({ ...quiz, title: e.target.value });
                }}
            />
            <span>Description:</span>
            <Editor
                className="form-control mb-3"
                id="wd-description"
                style={{ height: "300px" }}
                value={quiz?.description}
                onChange={(e) => {
                    setQuiz({
                        ...quiz,
                        description: e.target.value,
                    });
                }}
            />
            <div className="row mb-3">
                <label
                    htmlFor="wd-quiz-type"
                    className="col-sm-5 col-form-label text-end"
                >
                    Quiz Type
                </label>
                <div className="col">
                    <select
                        id="wd-quiz-type"
                        className="form-select"
                        value={quiz?.type}
                        onChange={(e) =>
                            setQuiz({ ...quiz, type: e.target.value })
                        }
                    >
                        <option value="Graded Quiz">Graded Quiz</option>
                        <option value="Practice Quiz">Practice Quiz</option>
                        <option value="Graded Survey">Graded Survey</option>
                        <option value="Ungraded Survey">Ungraded Survey</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-quiz-points"
                    className="col-sm-5 col-form-label text-end"
                >
                    Points
                </label>
                <div className="col">
                    <input
                        type="number"
                        className="form-control w-50"
                        id="wd-quiz-points"
                        value={quiz?.points}
                        onChange={(e) => {
                            setQuiz({
                                ...quiz,
                                points: e.target.value,
                            });
                        }}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-quiz-type"
                    className="col-sm-5 col-form-label text-end"
                >
                    Assignment Group
                </label>
                <div className="col">
                    <select
                        id="wd-quiz-type"
                        className="form-select"
                        onChange={(e) => {
                            setQuiz({ ...quiz, group: e.target.value });
                            console.log(quiz);
                        }}
                    >
                        <option value="QUIZZES">Quizzes</option>
                        <option value="EXAMS">Exams</option>
                        <option value="ASSIGNMENTS">Assignments</option>
                        <option value="PROJECT">Project</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-quiz-shuffle"
                    className="col-sm-5 col-form-label text-end"
                >
                    Shuffle Answers
                </label>
                <div className="col">
                    <input
                        type="checkbox"
                        name="check-online-entry"
                        id="wd-quiz-shuffle"
                        checked={quiz.shuffle}
                        className="form-check-input mt-2"
                        onChange={() =>
                            setQuiz({ ...quiz, shuffle: !quiz.shuffle })
                        }
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-time"
                    className="col-sm-5 col-form-label text-end"
                >
                    Time Limit (Minutes)
                </label>
                <div className="col">
                    <input
                        type="number"
                        className="form-control w-50"
                        id="wd-time"
                        value={quiz?.timeMin}
                        onChange={(e) => {
                            setQuiz({
                                ...quiz,
                                timeMin: e.target.value,
                            });
                        }}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-quiz-attempts"
                    className="col-sm-5 col-form-label text-end"
                >
                    Multiple Attempts
                </label>
                <div className="col">
                    <input
                        type="checkbox"
                        name="check-online-entry"
                        id="wd-quiz-attempts"
                        checked={quiz?.attempts > 1}
                        className="form-check-input mt-2"
                        onChange={() => {
                            if (quiz.attempts > 1) {
                                setQuiz({ ...quiz, attempts: 1 });
                            } else {
                                setQuiz({ ...quiz, attempts: 2 });
                            }
                        }}
                    />
                </div>
            </div>
            {quiz.attempts > 1 && (
                <div className="row mb-3">
                    <label
                        htmlFor="wd-quiz-attempts"
                        className="col-sm-5 col-form-label text-end"
                    >
                        Attempts
                    </label>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control w-50"
                            id="wd-quiz-attempts"
                            value={quiz?.attempts}
                            onChange={(e) => {
                                setQuiz({
                                    ...quiz,
                                    attempts: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
            )}
            <div className="row mb-3">
                <label
                    htmlFor="wd-show-correct-answers"
                    className="col-sm-5 col-form-label text-end"
                >
                    Show Correct Answers
                </label>
                <div className="col">
                    <input
                        type="date"
                        id="wd-due-date"
                        className="form-control mb-3"
                        value={quiz?.showCorrectAnswers}
                        onChange={(e) => {
                            setQuiz({
                                ...quiz,
                                showCorrectAnswers: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="col">
                    <button
                        className="btn btn-secondary"
                        onClick={() =>
                            setQuiz({ ...quiz, showCorrectAnswers: undefined })
                        }
                    >
                        Clear
                    </button>
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-access-code"
                    className="col-sm-5 col-form-label text-end"
                >
                    Access Code
                </label>
                <div className="col">
                    <input
                        id="wd-access-code"
                        className="form-control mb-3"
                        value={quiz?.accessCode}
                        onChange={(e) =>
                            setQuiz({ ...quiz, accessCode: e.target.value })
                        }
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-one-at-a-time"
                    className="col-sm-5 col-form-label text-end"
                >
                    One Question at a Time
                </label>
                <div className="col">
                    <input
                        type="checkbox"
                        name="check-online-entry"
                        id="wd-one-at-a-time"
                        checked={quiz?.oneQuestionAtATime}
                        className="form-check-input mt-2"
                        onChange={() =>
                            setQuiz({
                                ...quiz,
                                oneQuestionAtATime: !quiz.oneQuestionAtATime,
                            })
                        }
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-quiz-webcamRequired"
                    className="col-sm-5 col-form-label text-end"
                >
                    Webcam Required
                </label>
                <div className="col">
                    <input
                        type="checkbox"
                        name="check-online-entry"
                        id="wd-quiz-webcamRequired"
                        checked={quiz.webcamRequired}
                        className="form-check-input mt-2"
                        onChange={() =>
                            setQuiz({
                                ...quiz,
                                webcamRequired: !quiz.webcamRequired,
                            })
                        }
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="wd-quiz-lockQuestions"
                    className="col-sm-5 col-form-label text-end"
                >
                    Lock Questions After Answering
                </label>
                <div className="col">
                    <input
                        type="checkbox"
                        name="check-online-entry"
                        id="wd-quiz-lockQuestions"
                        checked={quiz.lockQuestions}
                        className="form-check-input mt-2"
                        onChange={() =>
                            setQuiz({
                                ...quiz,
                                lockQuestions: !quiz.lockQuestions,
                            })
                        }
                    />
                </div>
            </div>
            <div className="mt-3">
                <div className="row">
                    <label
                        htmlFor="wd-availableDate"
                        className="col-sm-5 col-form-label text-end"
                    >
                        Available From
                    </label>
                    <div className="col">
                        <input
                            type="date"
                            id="wd-availableDate"
                            className="form-control mb-3"
                            value={quiz?.availableDate}
                            onChange={(e) => {
                                setQuiz({
                                    ...quiz,
                                    availableDate: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <label
                        htmlFor="wd-untilDate"
                        className="col-sm-5 col-form-label text-end"
                    >
                        Until
                    </label>
                    <div className="col">
                        <input
                            type="date"
                            id="wd-untilDate"
                            className="form-control mb-3"
                            value={quiz?.untilDate}
                            onChange={(e) => {
                                setQuiz({
                                    ...quiz,
                                    untilDate: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <label
                        htmlFor="wd-due"
                        className="col-sm-5 col-form-label text-end"
                    >
                        Due Date
                    </label>
                    <div className="col">
                        <input
                            type="date"
                            id="wd-due"
                            className="form-control mb-3"
                            value={quiz?.due}
                            onChange={(e) => {
                                setQuiz({
                                    ...quiz,
                                    due: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
            <hr />
            <Link
                to={`../Quizzes/${qid}`}
                className="btn btn-danger me-2"
                onClick={() => saveQuiz(false)}
            >
                Save
            </Link>
            <Link
                to="../Quizzes"
                className="btn btn-success me-2"
                onClick={() => saveQuiz(true)}
            >
                Save and Publish
            </Link>
            <Link to="../Quizzes" className="btn btn-secondary me-2">
                Cancel
            </Link>
        </div>
    );
}
