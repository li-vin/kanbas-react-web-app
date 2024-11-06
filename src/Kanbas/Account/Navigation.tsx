import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    return (
        <div
            id="wd-account-navigation"
            className="wd list-group fs-5 rounded-0"
        >
            {links.map((link) => (
                <Link
                    className="list-group-item active border border-0"
                    to={`/Kanbas/Account/${link}`}
                >
                    {link}
                </Link>
            ))}
            {/* <Link
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
            </Link> */}
        </div>
    );
}
