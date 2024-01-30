import "./NavBar.css";

export const NavBar = () => {
    const TABS = [
        { name: "work!", route: "/" },
        { name: "& more", route: "/" },
        { name: "my diary", route: "/" },
        { name: "resume", route: "/" },
    ];

    const onClick = () => {
        document.body.classList.toggle("light-theme");
    };

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <p className="accent">atdu &#x2765;</p>
            </div>
            <div className="navbar__tabs">
                {TABS.map((tab) => (
                    <div key={tab.name} className="navbar__tabs__tab">
                        {tab.name}
                    </div>
                ))}
                <button onClick={onClick}> Toggle </button>
            </div>
        </div>
    );
};
