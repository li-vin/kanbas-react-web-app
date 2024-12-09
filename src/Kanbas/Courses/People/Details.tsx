import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FaCheck, FaPencil } from "react-icons/fa6";
export default function PeopleDetails() {
    const { uid } = useParams();
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [editing, setEditing] = useState(false);

    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName, role, email };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        navigate(-1);
    };

    const navigate = useNavigate();
    const close = () => {
        navigate(-1);
        setEditing(false);
        setUser(null);
    };
    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        navigate(-1);
    };

    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
        setName(`${user?.firstName} ${user?.lastName}`);
        setEmail(user?.email);
        setRole(user?.role);
        console.log(user, name);
    };
    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);
    if (!uid) return null;
    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <button
                onClick={() => close()}
                className="btn position-fixed end-0 top-0 wd-close-details"
            >
                <IoCloseSharp className="fs-1" />
            </button>
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" />
            </div>
            <hr />
            <div className="text-danger fs-4 wd-name">
                {!editing && (
                    <FaPencil
                        onClick={() => setEditing(true)}
                        className="float-end fs-5 mt-2 wd-edit"
                    />
                )}
                {editing && (
                    <FaCheck
                        onClick={() => saveUser()}
                        className="float-end fs-5 mt-2 me-2 wd-save"
                    />
                )}
                {!editing && (
                    <div className="wd-name" onClick={() => setEditing(true)}>
                        {user?.firstName} {user?.lastName}
                    </div>
                )}
                {user && editing && (
                    <input
                        className="form-control w-50 wd-edit-name"
                        defaultValue={`${user?.firstName} ${user?.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                saveUser();
                            }
                        }}
                    />
                )}
            </div>
            <div className="wd-roles">
                <b>Role:</b>{" "}
                <span className="wd-role" onClick={() => setEditing(true)}>
                    {!editing && user?.role}
                </span>
                {editing && (
                    <select
                        defaultValue={user?.role}
                        onChange={(e) => setRole(e.target.value)}
                        className="form-select w-50 wd-edit-role"
                    >
                        <option value="STUDENT">Student</option>
                        <option value="TA">Assistant</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="ADMIN">Administrator</option>
                    </select>
                )}
            </div>
            <b>Email: </b>
            <span className="wd-emails">
                <span className="wd-email" onClick={() => setEditing(true)}>
                    {!editing && user?.email}
                </span>
                {editing && (
                    <input
                        defaultValue={user?.email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control w-50 wd-edit-email"
                    />
                )}
            </span>
            <br />
            <b>Login ID:</b>
            <span className="wd-login-id"> {user?.loginId} </span> <br />
            <b>Section:</b>{" "}
            <span className="wd-section"> {user?.section} </span>
            <br />
            <b>Total Activity:</b>
            <span className="wd-total-activity">{user?.totalActivity}</span>
            <hr />
            <button
                onClick={() => deleteUser(uid)}
                className="btn btn-danger float-end wd-delete"
            >
                Delete
            </button>
            <button
                onClick={() => close()}
                className="btn btn-secondary float-start float-end me-2 wd-cancel"
            >
                Cancel
            </button>
        </div>
    );
}
