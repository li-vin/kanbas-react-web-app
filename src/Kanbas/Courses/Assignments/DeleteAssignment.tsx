import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function DeleteAssignment({
    assignment,
}: {
    assignment: { _id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <div
            id="wd-delete-assignment-dialogue"
            className="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                        >
                            Are you sure you want to delete {assignment?.title}?
                        </h1>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            No
                        </button>
                        <button
                            onClick={() => {
                                console.log(assignment);
                                dispatch(deleteAssignment(assignment._id));
                            }}
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
