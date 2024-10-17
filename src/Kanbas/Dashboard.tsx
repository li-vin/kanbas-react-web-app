import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "300px" }}
                    >
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home"
                            >
                                <img
                                    src="/images/reactjs.jpg"
                                    width="100%"
                                    height={160}
                                    alt="reactjs"
                                />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">
                                        Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "300px" }}
                    >
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home"
                            >
                                <img
                                    src="/images/uwbw.jpg"
                                    width="100%"
                                    height={160}
                                    alt="underwater basket weave"
                                />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ART5833 Basket Weave
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Underwater Basket Weaving
                                    </p>
                                    <button className="btn btn-primary">
                                        Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "300px" }}
                    >
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home"
                            >
                                <img
                                    src="/images/os.jpg"
                                    width="100%"
                                    height={160}
                                    alt="os"
                                />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5 Operating Systems
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Operating Systems
                                    </p>
                                    <button className="btn btn-primary">
                                        Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "300px" }}
                    >
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home"
                            >
                                <img
                                    src="/images/juggling.jpg"
                                    width="100%"
                                    height={160}
                                    alt="juggler"
                                />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        JUG106 Juggling
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Juggling for Engineering
                                    </p>
                                    <button className="btn btn-primary">
                                        Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "300px" }}
                    >
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home"
                            >
                                <img
                                    src="/images/reading.jpg"
                                    width="100%"
                                    height={160}
                                    alt="reading"
                                />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ENG6001 Reading
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Reading for Business
                                    </p>
                                    <button className="btn btn-primary">
                                        Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "300px" }}
                    >
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home"
                            >
                                <img
                                    src="/images/petfood.jpg"
                                    width="100%"
                                    height={160}
                                    alt="evolution dog food"
                                />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        EECE6178 Pet Food
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        The Evolution of Pet Food
                                    </p>
                                    <button className="btn btn-primary">
                                        Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "300px" }}
                    >
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home"
                            >
                                <img
                                    src="/images/lunch.jpg"
                                    width="100%"
                                    height={160}
                                    alt="food"
                                />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH178 Lunch
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Eat
                                    </p>
                                    <button className="btn btn-primary">
                                        Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
