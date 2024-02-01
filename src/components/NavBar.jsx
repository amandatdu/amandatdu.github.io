import { Link } from "react-router-dom";
import "./NavBar.css";

export const ROUTES = {
    work: "/",
    more: "/more",
    diary: "/diary",
    resume: "/resume",
};

export const NavBar = () => {
    const TABS = [
        { name: "work!", route: ROUTES.work },
        { name: "& more", route: ROUTES.more },
        { name: "my diary", route: ROUTES.diary },
        { name: "resume", route: ROUTES.resume },
    ];

    const onClick = () => {
        document.body.classList.toggle("light-theme");
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <p className="subtitle">atdu &#x2765;</p>
            </div>
            <div className="navbar__tabs">
                {TABS.map((tab) => (
                    <Link
                        key={tab.name}
                        className="navbar__tabs__tab"
                        to={tab.route}
                    >
                        {tab.name}
                    </Link>
                ))}
                <button onClick={onClick}> Toggle </button>
            </div>
        </nav>
    );
};
