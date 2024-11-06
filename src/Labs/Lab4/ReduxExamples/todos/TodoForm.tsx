import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <button
                onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"
                className="float-end btn btn-success ms-2"
            >
                Add
            </button>
            <button
                onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"
                className="float-end btn btn-warning ms-2"
            >
                Update
            </button>
            <input
                value={todo.title}
                onChange={(e) =>
                    dispatch(setTodo({ ...todo, title: e.target.value }))
                }
                className="form-control w-50"
            />
        </li>
    );
}
