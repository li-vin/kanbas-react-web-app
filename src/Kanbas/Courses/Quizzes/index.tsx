import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { FcApproval, FcCancel } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import { useParams } from "react-router";
import { addQuiz, deleteQuiz, setQuizzes, updateQuiz } from "./reducer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import * as quizzesClient from "./client";

export default function Quizzes() {
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
    const dispatch = useDispatch();

    const defaultQuiz = {
        title: "New Quiz",
        type: "Graded Quiz",
        points: 0,
        group: "QUIZZES",
        shuffle: true,
        timeMin: 20,
        attempts: 1,
        accessCode: "",
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestions: false,
        due: new Date().toISOString(),
        availableDate: new Date().toISOString(),
        untilDate: new Date().toISOString(),
        published: false,
    };

    const fetchQuizzes = async () => {
        if (currentUser.role !== "STUDENT") {
            const quizzes = await coursesClient.findQuizzesForCourse(
                cid as string
            );
            dispatch(setQuizzes(quizzes));
        } else {
            const quizzes = await coursesClient.findPublishedQuizzesForCourse(
                cid as string
            );
            dispatch(setQuizzes(quizzes));
        }
    };

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const removeQuiz = async (quizId: string) => {
        await quizzesClient.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };
    const createQuiz = async () => {
        const newQuiz = await coursesClient.createQuizForCourse(
            cid as string,
            defaultQuiz
        );
        dispatch(addQuiz(newQuiz));
        fetchQuizzes();
    };
    const togglePublish = async (quiz: any, published: boolean) => {
        const newQuiz = { ...quiz, published: !published };
        await quizzesClient.updateQuiz(newQuiz);
        dispatch(updateQuiz(newQuiz));
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return (
            date.toLocaleDateString("en", {
                month: "short",
                day: "2-digit",
            }) +
            " at " +
            date.toLocaleTimeString("en", {
                hour: "numeric",
                minute: "numeric",
            })
        );
    };
    const availableText = (from: string, to: string) => {
        let today = new Date();
        let available = new Date(from);
        let until = new Date(to);
        if (today < available) {
            return "Not available until " + formatDate(from);
        } else if (today < until) {
            return "Available until " + formatDate(to);
        }
        return "Closed";
    };

    return (
        <div id="wd-quizzes">
            <div className="d-flex justify-content-end mb-2">
                <div
                    id="wd-search-quiz"
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

                {currentUser.role !== "STUDENT" && (
                    <>
                        <button
                            id="wd-add-quiz-group"
                            className="btn btn-danger text-nowrap ms-1"
                            // to={new Date().getTime().toString()}
                            onClick={() => createQuiz()}
                        >
                            + Quiz
                        </button>
                        <button
                            type="button"
                            id="wd-add-quiz-group"
                            className="btn btn-outline-secondary text-nowrap ms-1 ps-2 pe-2"
                        >
                            <BsThreeDotsVertical />
                        </button>
                    </>
                )}
            </div>
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
                                <Link
                                    className="text-black link-underline link-underline-opacity-0"
                                    to={quiz._id}
                                >
                                    {quiz.title}
                                </Link>
                                <div className="fs-6">
                                    {availableText(
                                        quiz.availableDate,
                                        quiz.untilDate
                                    )}{" "}
                                    | Due {formatDate(quiz.due)} | {quiz.points}{" "}
                                    pts | {quiz.questions} Questions
                                </div>
                            </div>
                            <div id="published-icon">
                                {quiz.published ? <FcApproval /> : <FcCancel />}
                            </div>
                            {currentUser.role !== "STUDENT" && (
                                <div className="dropdown d-inline me-1 float-end">
                                    <BsThreeDotsVertical
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    />
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item">Edit</li>
                                        <li
                                            className="dropdown-item"
                                            onClick={() => removeQuiz(quiz._id)}
                                        >
                                            Delete
                                        </li>
                                        <li
                                            className="dropdown-item"
                                            onClick={() =>
                                                togglePublish(
                                                    quiz,
                                                    quiz.published
                                                )
                                            }
                                        >
                                            {quiz.published
                                                ? "Unpublish"
                                                : "Publish"}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
