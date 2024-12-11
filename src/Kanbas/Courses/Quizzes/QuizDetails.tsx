import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";
import { setQuizzes } from "./reducer";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Details() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
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

    const boolToYN = (bool: boolean) => {
        return bool ? "Yes" : "No";
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

    const quizDetail = (label: String, value: any) => {
        return (
            <div className="row mb-1">
                <div className="col text-end fw-bold">{label}</div>
                <div className="col text-start">{value}</div>
            </div>
        );
    };

    return (
        <div className="w-75">
            {currentUser.role !== "STUDENT" && (
                <div className="row me-3">
                    <div className="col">
                        <button className="btn btn-secondary col float-end">
                            Preview
                        </button>
                    </div>
                    <div className="col">
                        <Link className="btn btn-secondary col" to="Editor">
                            <FaPencil /> Edit
                        </Link>
                    </div>
                </div>
            )}
            <hr />
            <span className="fs-4">{quiz?.title}</span>
            {currentUser.role !== "STUDENT" ? (
                <div className="row mb-3">
                    {quizDetail("Quiz Type", quiz.type)}
                    {quizDetail("Points", quiz.points)}
                    {quizDetail("Assignment Group", quiz.group)}
                    {quizDetail("Shuffle Answers", boolToYN(quiz.shuffle))}
                    {quizDetail("Time Limit", quiz.timeMin + " Minutes")}
                    {quizDetail(
                        "Multiple Attempts",
                        boolToYN(quiz.attempts >= 1)
                    )}
                    {quiz.attempts >= 1 &&
                        quizDetail("Attempts", quiz.attempts)}
                    {quizDetail(
                        "Show Correct Answers",
                        quiz.showCorrectAnswers
                            ? formatDate(quiz.showCorrectAnswers)
                            : "Immediately"
                    )}
                    {quizDetail(
                        "One Question at a Time",
                        boolToYN(quiz.oneQuestionAtATime)
                    )}
                    {quizDetail("Access Code", quiz.accessCode)}
                    {quizDetail(
                        "Webcam Required",
                        boolToYN(quiz.webcamRequired)
                    )}
                    {quizDetail(
                        "Lock Questions After Answering",
                        boolToYN(quiz.lockQuestions)
                    )}
                    <br />
                    <br />
                </div>
            ) : (
                <div>
                    <p>{quiz.description}</p>
                    <Link
                        to="Quiz"
                        className="btn btn-danger position-relative start-50"
                    >
                        Start
                    </Link>
                    <br />
                    <br />
                </div>
            )}
            <div className="row">
                <div className="col fw-bold">Due</div>
                <div className="col fw-bold">Available from</div>
                <div className="col fw-bold">Until</div>
            </div>
            <hr />
            <div className="row">
                <div className="col">{formatDate(quiz.due)}</div>
                <div className="col">{formatDate(quiz.availableDate)}</div>
                <div className="col">{formatDate(quiz.untilDate)}</div>
            </div>
        </div>
    );
}
