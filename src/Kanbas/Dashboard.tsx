import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link
                        className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/:cid/*"
                    >
                        <img
                            src="/images/reactjs.jpg"
                            width={200}
                            alt="reactjs"
                        />
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link
                        className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/:cid/*"
                    >
                        <img
                            src="/images/uwbw.jpg"
                            width={200}
                            alt="underwater basket weave"
                        />
                        <div>
                            <h5>ART5833 Underwater Basket Weaving</h5>
                            <p className="wd-dashboard-course-title">
                                Underwater Basket Weaving
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>{" "}
                </div>
                <div className="wd-dashboard-course">
                    <Link
                        className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/:cid/*"
                    >
                        <img src="/images/os.jpg" width={200} alt="os" />
                        <div>
                            <h5>CS5 Operating Systems</h5>
                            <p className="wd-dashboard-course-title">
                                Operating Systems
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>{" "}
                </div>
                <div className="wd-dashboard-course">
                    <Link
                        className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/:cid/*"
                    >
                        <img
                            src="/images/juggling.jpg"
                            width={200}
                            alt="juggler"
                        />
                        <div>
                            <h5>JUG106 Juggling</h5>
                            <p className="wd-dashboard-course-title">
                                Juggling for Engineering
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>{" "}
                </div>
                <div className="wd-dashboard-course">
                    <Link
                        className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/:cid/*"
                    >
                        <img
                            src="/images/reading.jpg"
                            width={200}
                            alt="reading"
                        />
                        <div>
                            <h5>ENG6001 Reading</h5>
                            <p className="wd-dashboard-course-title">
                                Reading for Business
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>{" "}
                </div>
                <div className="wd-dashboard-course">
                    <Link
                        className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/:cid/*"
                    >
                        <img
                            src="/images/petfood.jpg"
                            width={200}
                            alt="evolution dog food"
                        />
                        <div>
                            <h5>EECE6178 Pet Food</h5>
                            <p className="wd-dashboard-course-title">
                                The Evolution of Pet Food
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>{" "}
                </div>
                <div className="wd-dashboard-course">
                    <Link
                        className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/:cid/*"
                    >
                        <img src="/images/lunch.jpg" width={200} alt="food" />
                        <div>
                            <h5>MATH178 Lunch</h5>
                            <p className="wd-dashboard-course-title">Eat</p>
                            <button> Go </button>
                        </div>
                    </Link>{" "}
                </div>
            </div>
        </div>
    );
}
