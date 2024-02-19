import { Link, useLocation } from "react-router-dom";
import { Toggle } from "./Toggle";
import "./NavBar.css";

export const ROUTES = {
    work: "/work",
    more: "/more",
    diary: "/diary",
    resume: "/resume",
    intuit: "/work/intuit",
    tpc: "work/tpc"
};

export const NavBar = () => {
    const TABS = [
        { name: "work!", route: ROUTES.work },
        { name: "& more", route: ROUTES.more },
        { name: "my diary", route: ROUTES.diary },
        {
            name: "resume",
            isExternal: true,
            route: "https://drive.google.com/file/d/10kwVXjl0VPGhPjpsV3HYjAHHyeruPAtN/view",
        },
    ];

    const onClick = () => {
        document.body.classList.toggle("lightTheme");
    };

    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar__home">
                <Toggle onChange={onClick} />
            </div>
            <div className="navbar__tabs">
                {TABS.map((tab) =>
                    tab.isExternal ? (
                        <a
                            key={tab.name}
                            className={`navbar__tabs__tab ${
                                location.pathname === tab.route
                                    ? "navbar__tabs__tab--selected"
                                    : ""
                            }`}
                            href={tab.route}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {tab.name}
                        </a>
                    ) : (
                        <Link
                            key={tab.name}
                            className={`navbar__tabs__tab ${
                                location.pathname === tab.route
                                    ? "navbar__tabs__tab--selected"
                                    : ""
                            }`}
                            to={tab.route}
                        >
                            {tab.name}
                        </Link>
                    )
                )}
            </div>
        </nav>
    );
};
