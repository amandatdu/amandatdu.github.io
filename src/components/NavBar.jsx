import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Toggle } from "./Toggle";
import { ThemeContext } from "../utils/ThemeContext";
import "./NavBar.css";
import { Underline } from "../assets/Underline";

export const ROUTES = {
    work: "/work",
    more: "/more",
    diary: "/diary",
    resume: "/resume",
    intuit: "/work/intuit",
    tpc: "/work/tpc",
    lcbo: "/work/lcbo",
};

export const NavBar = () => {
    const { toggleLightMode } = useContext(ThemeContext);
    const location = useLocation();

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
        toggleLightMode();
    };

    return (
        <nav className="navbar">
            <div className="navbar__home">
                <Toggle onChange={onClick} />
            </div>
            <div className="navbar__tabs">
                {TABS.map((tab) => {
                    const isSelected = location.pathname.includes(tab.route);
                    const className = `navbar__tabs__tab ${
                        isSelected ? "navbar__tabs__tab--selected" : ""
                    }`;

                    return tab.isExternal ? (
                        <a
                            key={tab.name}
                            className={className}
                            href={tab.route}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {tab.name}
                            {isSelected && <Underline />}
                        </a>
                    ) : (
                        <Link
                            key={tab.name}
                            className={className}
                            to={tab.route}
                        >
                            {tab.name}
                            {isSelected && <Underline />}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
