import { useDispatch } from "react-redux";
import { updateQuestion } from "./reducer";
import { FaTrash } from "react-icons/fa6";

export default function FillInTheBlank({ question }: { question: any }) {
    const dispatch = useDispatch();

    const updateAnswerAtIndex = (index: number, value: string) => {
        const newAnswers = question.correctShortAnswers.map(
            (answer: string, i: number) => (i === index ? value : answer)
        );
        dispatch(
            updateQuestion({ ...question, correctShortAnswers: newAnswers })
        );
    };
    const deleteAnswerAtIndex = (index: number) => {
        const newAnswers = question.correctShortAnswers.filter(
            (answer: string, i: number) => i !== index
        );
        dispatch(
            updateQuestion({ ...question, correctShortAnswers: newAnswers })
        );
    };

    return (
        <div>
            {question.editing ? (
                question.correctShortAnswers.map(
                    (answer: string, index: number) => (
                        <span className="d-flex">
                            <input
                                className="form-control mb-3"
                                value={answer}
                                onChange={(e) =>
                                    updateAnswerAtIndex(index, e.target.value)
                                }
                            />
                            <FaTrash
                                className="mt-2 ms-2"
                                onClick={() => deleteAnswerAtIndex(index)}
                            />
                        </span>
                    )
                )
            ) : (
                <input className="form-control mb-3" />
            )}
            {question.editing && (
                <button
                    className="btn btn-secondary"
                    onClick={() =>
                        dispatch(
                            updateQuestion({
                                ...question,
                                correctShortAnswers: [
                                    ...question.correctShortAnswers,
                                    "New Answer",
                                ],
                            })
                        )
                    }
                >
                    + Answer
                </button>
            )}
        </div>
    );
}
