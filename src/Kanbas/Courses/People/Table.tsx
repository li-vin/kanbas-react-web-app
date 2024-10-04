import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
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
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Tony</span>{" "}
                            <span className="wd-last-name">Stark</span>
                        </td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">John</span>{" "}
                            <span className="wd-last-name">Cena</span>
                        </td>
                        <td className="wd-login-id">00116820S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-12-21</td>
                        <td className="wd-total-activity">19:21:32</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Katniss</span>{" "}
                            <span className="wd-last-name">Everdeen</span>
                        </td>
                        <td className="wd-login-id">00121212S</td>
                        <td className="wd-section">S112</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2012-12-12</td>
                        <td className="wd-total-activity">12:12:12</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Guido</span>{" "}
                            <span className="wd-last-name">Mista</span>
                        </td>
                        <td className="wd-login-id">44444444S</td>
                        <td className="wd-section">S444</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2024-04-04</td>
                        <td className="wd-total-activity">04:04:44</td>
                    </tr>
                    {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
                </tbody>
            </table>
        </div>
    );
}
