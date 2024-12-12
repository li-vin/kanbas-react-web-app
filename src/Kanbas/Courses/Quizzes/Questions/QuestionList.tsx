import { useDispatch, useSelector } from "react-redux";
import * as quizzesClient from "../client";
import * as questionsClient from "./client";
import { useParams } from "react-router";
import { useEffect } from "react";
import {
    addQuestion,
    deleteQuestion,
    editQuestion,
    setQuestions,
    updateQuestion,
} from "./reducer";
import MultipleChoice from "./MultipleChoice";
import Editor from "react-simple-wysiwyg";
import TrueFalse from "./TrueFalse";
import FillInTheBlank from "./FillInTheBlank";
import { Link } from "react-router-dom";

export default function QuestionsList() {
    const { qid } = useParams();
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const dispatch = useDispatch();

    const defaultQuestion = {
        title: "New Question",
        type: "Multiple Choice",
        points: 0,
        questionText: "Problem",
        choices: [],
        correctChoice: "",
        correctShortAnswers: [],
        quiz: qid,
    };

    const fetchQuestions = async () => {
        const questions = await quizzesClient.findQuestionsForQuiz(
            qid as string
        );
        dispatch(setQuestions(questions));
    };
    useEffect(() => {
        fetchQuestions();
    }, []);
    const createNewQuestion = async () => {
        const newQuestion = await quizzesClient.createQuestionForQuiz(
            qid as string,
            defaultQuestion
        );
        dispatch(addQuestion(newQuestion));
        fetchQuestions();
    };
    const fetchQuestion = async (questionId: string) => {
        const question = await questionsClient.retrieveQuestion(questionId);
        dispatch(updateQuestion({ ...question, editing: false }));
    };
    const saveQuestion = async (question: any) => {
        const newQuestion = await questionsClient.updateQuestion(question);
        dispatch(updateQuestion({ ...question, editing: false }));
    };
    const removeQuestion = async (question: any) => {
        const status = await questionsClient.deleteQuestion(question._id);
        dispatch(deleteQuestion(question._id));
    };

    return (
        <div id="wd-question">
            <div className="wd-title p-0 mb-5 w-75">
                <hr />
                <ul id="wd-question-list" className="list-group">
                    {questions.map((question: any) => (
                        <li
                            className="wd-question-list-item p-3 ps-1 d-flex card mb-3"
                            key={question._id}
                        >
                            <div
                                className="card-header"
                                onClick={() =>
                                    dispatch(editQuestion(question._id))
                                }
                            >
                                <div className="d-flex justify-content-between">
                                    <span className="col">
                                        {question.editing ? (
                                            <input
                                                className="col form-control w-50"
                                                value={question.title}
                                                onChange={(e) =>
                                                    dispatch(
                                                        updateQuestion({
                                                            ...question,
                                                            title: e.target
                                                                .value,
                                                        })
                                                    )
                                                }
                                            />
                                        ) : (
                                            question.title
                                        )}
                                    </span>
                                    <span className="col">
                                        {question.editing ? (
                                            <select
                                                className="form-select w-75"
                                                value={question.type}
                                                onChange={(e) => {
                                                    dispatch(
                                                        updateQuestion({
                                                            ...question,
                                                            type: e.target
                                                                .value,
                                                        })
                                                    );
                                                    console.log(question.type);
                                                }}
                                            >
                                                <option value="Multiple Choice">
                                                    Multiple Choice
                                                </option>
                                                <option value="True/False">
                                                    True/False
                                                </option>
                                                <option value="Fill in the Blank">
                                                    Fill in the Blank
                                                </option>
                                            </select>
                                        ) : (
                                            question.type
                                        )}
                                    </span>
                                    {question.editing ? (
                                        <span className="col row w-50">
                                            <input
                                                className="form-control w-25 col"
                                                value={question.points}
                                                type="number"
                                                onChange={(e) =>
                                                    dispatch(
                                                        updateQuestion({
                                                            ...question,
                                                            points: e.target
                                                                .value,
                                                        })
                                                    )
                                                }
                                            />
                                            <span className="w-25 col">
                                                points
                                            </span>
                                        </span>
                                    ) : (
                                        <span className="col">
                                            {question.points} points
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    {question.editing ? (
                                        <Editor
                                            className="mb-3"
                                            value={question.questionText}
                                            onChange={(e) => {
                                                dispatch(
                                                    updateQuestion({
                                                        ...question,
                                                        questionText:
                                                            e.target.value,
                                                    })
                                                );
                                            }}
                                        />
                                    ) : (
                                        question.questionText
                                    )}
                                </div>
                                {question.type === "Multiple Choice" && (
                                    <MultipleChoice question={question} />
                                )}
                                {question.type === "True/False" && (
                                    <TrueFalse question={question} />
                                )}
                                {question.type === "Fill in the Blank" && (
                                    <FillInTheBlank question={question} />
                                )}
                                {question.editing && (
                                    <div>
                                        <hr />
                                        <button
                                            className="btn btn-secondary me-2"
                                            onClick={() =>
                                                fetchQuestion(question._id)
                                            }
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                saveQuestion(question)
                                            }
                                        >
                                            Save Question
                                        </button>
                                        <button
                                            className="btn btn-danger float-end"
                                            onClick={() =>
                                                removeQuestion(question)
                                            }
                                        >
                                            Delete Question
                                        </button>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                    <div>
                        <button
                            className="btn btn-secondary position-relative start-50 translate-middle mt-4"
                            onClick={() => createNewQuestion()}
                        >
                            + New Question
                        </button>
                    </div>
                </ul>
            </div>
            <Link to={`../Quizzes/${qid}`} className="btn btn-danger me-2">
                Save
            </Link>
        </div>
    );
}
