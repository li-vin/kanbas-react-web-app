import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as quizzesClient from "../client";
import { setQuestions } from "./reducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Quiz() {
    const { qid } = useParams();
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [answers, setAnswers] = useState<any[]>([]);
    const dispatch = useDispatch();

    const fetchQuestions = async () => {
        const questions = await quizzesClient.findQuestionsForQuiz(
            qid as string
        );
        dispatch(setQuestions(questions));
    };
    useEffect(() => {
        fetchQuestions();
        console.log(questions);
    }, []);

    const submitAnswers = async () => {
        const attempt = await quizzesClient.submitAttempt(
            currentUser._id,
            qid as string,
            answers
        );
    };

    const answerQuestionString = (question: string, newAnswer: string) => {
        if (answers?.find((answer) => answer.question === question)) {
            const newAnswers = answers?.map((answer) =>
                answer.question === question
                    ? { ...answer, answerString: newAnswer }
                    : answer
            );
            setAnswers(newAnswers);
        } else {
            setAnswers([
                ...answers,
                { question: question, answerString: newAnswer },
            ]);
        }
    };
    const answerQuestionBool = (question: string, newAnswer: boolean) => {
        if (answers?.find((answer) => answer.question === question)) {
            const newAnswers = answers?.map((answer) =>
                answer.question === question
                    ? { ...answer, answerBool: newAnswer }
                    : answer
            );
            setAnswers(newAnswers);
        } else {
            setAnswers([
                ...answers,
                { question: question, answerBool: newAnswer },
            ]);
        }
    };

    return (
        <div>
            <ul id="wd-question-list-quiz" className="list-group">
                {questions.map((question: any) => (
                    <li
                        className="wd-question-list-item p-3 ps-1 d-flex card mb-3"
                        key={question._id}
                    >
                        <div className="card-header">
                            <div className="d-flex justify-content-between">
                                <span className="col">{question.title}</span>
                                <span className="col text-end">
                                    {question.points} points
                                </span>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">{question.questionText}</div>
                            <hr />
                            {question.type === "Multiple Choice" && (
                                <div>
                                    {question.choices.map((choice: string) => (
                                        <div className="form-check m-2">
                                            <input
                                                className="form-check-input mt-2"
                                                type="radio"
                                                name={question._id}
                                                id={question._id + choice}
                                                onChange={() =>
                                                    answerQuestionString(
                                                        question._id,
                                                        choice
                                                    )
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={question._id + choice}
                                            >
                                                {choice}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {question.type === "True/False" && (
                                <div>
                                    <div className="form-check m-2">
                                        <input
                                            className="form-check-input mt-2"
                                            type="radio"
                                            name={question._id}
                                            id={question._id + "true"}
                                            onChange={() =>
                                                answerQuestionBool(
                                                    question._id,
                                                    true
                                                )
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={question._id + "true"}
                                        >
                                            True
                                        </label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input
                                            className="form-check-input mt-2"
                                            type="radio"
                                            name={question._id}
                                            id={question._id + "false"}
                                            onChange={() =>
                                                answerQuestionBool(
                                                    question._id,
                                                    false
                                                )
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={question._id + "false"}
                                        >
                                            False
                                        </label>
                                    </div>
                                </div>
                            )}
                            {question.type === "Fill in the Blank" && (
                                <div>
                                    <input
                                        className="form-control mb-3"
                                        onChange={(e) =>
                                            answerQuestionString(
                                                question._id,
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
            <Link
                className="btn btn-secondary float-start"
                to={`../Quizzes/${qid}/Editor`}
            >
                Keep Editing
            </Link>
            <Link
                className="btn btn-primary float-end"
                onClick={() => submitAnswers()}
                to={`../Quizzes/${qid}`}
            >
                Submit Answers
            </Link>
        </div>
    );
}
