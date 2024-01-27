import './NavBar.css';

export const NavBar = () => {
    const TABS = [
        { name: "work!", route: "/"},
        { name: "& more", route: "/"},
        { name:  "my diary", route: "/"},
        { name: "resume", route: "/"}
    ];

    return (
        <div className="navbar">
            <div className="navbar__logo"> AMANDA</div>
            <div className="navbar__tabs">
                {
                    TABS.map((tab) => (
                        <div className="navbar__tabs__tab">{tab.name}</div>
                    ))
                }
            </div>
        </div>
    )
}