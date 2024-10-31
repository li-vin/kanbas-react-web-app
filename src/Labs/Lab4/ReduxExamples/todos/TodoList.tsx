import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div className="w-25">
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem todo={todo} />
                ))}

                {/* <li className="list-group-item">
                    <button
                        onClick={() => addTodo(todo)}
                        id="wd-add-todo-click"
                        className="float-end btn btn-success ms-2"
                    >
                        Add
                    </button>
                    <button
                        onClick={() => updateTodo(todo)}
                        id="wd-update-todo-click"
                        className="float-end btn btn-warning ms-2"
                    >
                        Update
                    </button>
                    <input
                        defaultValue={todo.title}
                        onChange={(e) =>
                            setTodo({ ...todo, title: e.target.value })
                        }
                        className="form-control w-50"
                    />
                </li>
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            id="wd-delete-todo-click"
                            className="float-end btn btn-danger ms-2"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => setTodo(todo)}
                            id="wd-set-todo-click"
                            className="float-end btn btn-primary ms-2"
                        >
                            Edit
                        </button>
                        {todo.title}
                    </li>
                ))} */}
            </ul>
            <hr />
        </div>
    );
}
