import { Link } from "react-router-dom";
export default function AccountNavigation() {
    return (
        <div
            id="wd-account-navigation"
            className="wd list-group fs-5 rounded-0"
        >
            <Link
                className="list-group-item active border border-0"
                to={`/Kanbas/Account/Signin`}
            >
                Signin
            </Link>
            <Link
                className="list-group-item text-danger border border-0"
                to={`/Kanbas/Account/Signup`}
            >
                Signup
            </Link>
            <Link
                className="list-group-item text-danger border border-0"
                to={`/Kanbas/Account/Profile`}
            >
                Profile
            </Link>
        </div>
    );
}
