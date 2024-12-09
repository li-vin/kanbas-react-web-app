import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link, useLocation } from "react-router-dom";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
    const { pathname } = useLocation();

    return (
        <div id="wd-people-table">
            <PeopleDetails />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                {pathname.includes("User") ? (
                                    <Link
                                        to={`/Kanbas/Account/Users/${user._id}`}
                                        className="text-decoration-none"
                                    >
                                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                                        <span className="wd-first-name">
                                            {user.firstName}{" "}
                                        </span>
                                        <span className="wd-last-name">
                                            {user.lastName}
                                        </span>
                                    </Link>
                                ) : (
                                    <div>
                                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                                        <span>
                                            {user.firstName} {user.lastName}
                                        </span>
                                    </div>
                                )}
                            </td>
                            <td className="wd-login-id">{user.loginId}</td>
                            <td className="wd-section">{user.section}</td>
                            <td className="wd-role">{user.role}</td>
                            <td className="wd-last-activity">
                                {user.lastActivity}
                            </td>
                            <td className="wd-total-activity">
                                {user.totalActivity}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
