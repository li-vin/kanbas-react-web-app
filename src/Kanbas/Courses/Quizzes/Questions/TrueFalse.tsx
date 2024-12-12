import { useDispatch } from "react-redux";
import { updateQuestion } from "./reducer";

export default function TrueFalse({ question }: { question: any }) {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="form-check m-2">
                <input
                    className="form-check-input mt-2"
                    type="radio"
                    name={question._id}
                    id="truefalse-true-option"
                    checked={question.editing && question.correctTrueFalse}
                    onChange={() => {
                        if (question.editing)
                            dispatch(
                                updateQuestion({
                                    ...question,
                                    correctTrueFalse: true,
                                })
                            );
                    }}
                />
                <label
                    className="form-check-label"
                    htmlFor="truefalse-true-option"
                >
                    True
                </label>
            </div>
            <div className="form-check m-2">
                <input
                    className="form-check-input mt-2"
                    type="radio"
                    name={question._id}
                    id="truefalse-false-option"
                    checked={question.editing && !question.correctTrueFalse}
                    onChange={() => {
                        if (question.editing)
                            dispatch(
                                updateQuestion({
                                    ...question,
                                    correctTrueFalse: false,
                                })
                            );
                    }}
                />
                <label
                    className="form-check-label"
                    htmlFor="truefalse-false-option"
                >
                    False
                </label>
            </div>
        </div>
    );
}
