import { useDispatch } from "react-redux";
import { updateQuestion } from "./reducer";
import { FaTrash } from "react-icons/fa";

export default function MultipleChoice({ question }: { question: any }) {
    const dispatch = useDispatch();

    const updateChoiceAtIndex = (index: number, value: string) => {
        const newChoices = question.choices.map((choice: string, i: number) =>
            i === index ? value : choice
        );
        dispatch(updateQuestion({ ...question, choices: newChoices }));
    };
    const deleteChoiceAtIndex = (index: number) => {
        const newChoices = question.choices.filter(
            (choice: string, i: number) => i !== index
        );
        dispatch(updateQuestion({ ...question, choices: newChoices }));
    };

    return (
        <div>
            {question.choices.map((choice: string, index: number) => (
                <div className="form-check m-2">
                    <input
                        className="form-check-input mt-2"
                        type="radio"
                        name={question._id}
                        id={index.toString()}
                        onChange={() => {
                            if (question.editing)
                                dispatch(
                                    updateQuestion({
                                        ...question,
                                        correctChoice: question.choices[index],
                                    })
                                );
                        }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={index.toString()}
                    >
                        {question.editing ? (
                            <input
                                value={choice}
                                className="form-control"
                                onChange={(e) =>
                                    updateChoiceAtIndex(index, e.target.value)
                                }
                                type="text"
                            />
                        ) : (
                            <span>{choice}</span>
                        )}
                    </label>
                    {question.editing && (
                        <FaTrash
                            className="ms-2"
                            onClick={() => deleteChoiceAtIndex(index)}
                        />
                    )}
                </div>
            ))}
            {question.editing && (
                <button
                    className="btn btn-secondary"
                    onClick={() =>
                        dispatch(
                            updateQuestion({
                                ...question,
                                choices: [...question.choices, "New Choice"],
                            })
                        )
                    }
                >
                    + Choice
                </button>
            )}
        </div>
    );
}
