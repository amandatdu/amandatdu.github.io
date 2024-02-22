import "./CaseStudy.css";

export const CaseHeader = ({ title, caseName, logo, children, theme }) => {
    return (
        <div className={"caseHeader " + caseName}>
            <div
                style={{
                    flexDirection: "column",
                    width: "45vh",
                    textAlign: "center",
                    padding: "150px",
                }}
                className={`color--${theme}`}
            >
                <div>{logo ? logo : null}</div>
                <h1> {title} </h1>
                <p className={`color--${theme}`}> {children} </p>
            </div>
        </div>
    );
};

export const CaseHMW = ({ HMWstatement, title, backgroundColor }) => {
    return (
        <div
            className="caseHMW"
            style={{
                backgroundColor: `${backgroundColor}`,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
            }}
        >
            <div
                style={{
                    width: "80%",
                }}
            >
                <h3
                    style={{
                        paddingBottom: "24px",
                    }}
                >
                    {" "}
                    {title}{" "}
                </h3>
                <h2> {HMWstatement} </h2>
            </div>
        </div>
    );
};

export const CaseStudy = ({
    title,
    children,
    image,
    isFullImage,
    imageClass,
    idName,
    theme,
    buttonBar,
    hideBorder,
}) => {
    return (
        <div className="caseStudy" id={idName ? `${idName}` : ""}>
            <div
                className={`caseImage ${imageClass ? imageClass : ""}${
                    isFullImage ? "full" : ""
                } ${hideBorder ? "hideBorder" : ""}`}
            >
                {image}
            </div>
            <div className={`caseContent ${buttonBar ? " buttons" : ""}`}>
                <h1 className={`color--${theme}`}> {title} </h1>
                <div className="p"> {children} </div>
            </div>
        </div>
    );
};

export const CaseIntro = ({ title, children, collaborators, team, theme }) => {
    return (
        <div className={`caseIntro color--${theme}`}>
            <div>
                <h2> {title} </h2>
                <div className="p"> {children} </div>
            </div>
            <div className="caseContext">
                <div>
                    <h3> Collaborators </h3>
                    <p> {collaborators} </p>
                </div>
                <div>
                    <h3> Team</h3>
                    <p> {team} </p>
                </div>
            </div>
        </div>
    );
};

export const SkipButton = ({ buttonText, targetId, buttonColour }) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor: `${buttonColour}`,
            }}
            className="button"
            role="button"
        >
            {buttonText}
        </div>
    );
};

export const LinkButton = ({ buttonText, targetUrl, buttonColour }) => {
    const handleClick = () => {
        window.open(targetUrl, "_blank");
    };

    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor: `${buttonColour}`,
            }}
            className="button"
            role="button"
        >
            {buttonText}
        </div>
    );
};
