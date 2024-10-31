import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables" className="w-25">
            <h2>Array State Variable</h2>
            <button onClick={addElement} className="btn btn-success">
                Add Element
            </button>
            <ul className="list-group">
                {array.map((item, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between"
                    >
                        <p className="align-middle fs-4 mb-0">{item}</p>
                        <button
                            onClick={() => deleteElement(index)}
                            className="btn btn-danger align-middle"
                            id="wd-delete-element-click"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
