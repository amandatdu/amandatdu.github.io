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
    buttonThemeColor,
    hideBorder,
    logo,
}) => {
    const themeClass = `color--${theme}`;
    return (
        <div className="caseStudy" id={idName ? `${idName}` : ""}>
            {image && (
                <div
                    className={`caseImage ${imageClass ? imageClass : ""}${
                        isFullImage ? "full" : ""
                    } ${hideBorder ? "hideBorder" : ""}`}
                >
                    {image}
                </div>
            )}
            <div className={`caseContent ${buttonBar ? " buttons" : ""}`}>
                {title && <h1 className={themeClass}> {title} </h1>}
                {children && (
                    <div
                        className={buttonBar ? themeClass : "p"}
                        style={{ ...(buttonBar && { textAlign: "center" }) }}
                    >
                        {children}
                    </div>
                )}
                {buttonBar && (
                    <>
                        <div className="buttonBar">{buttonBar}</div>
                        {logo}
                        <div
                            style={{
                                height: "0px",
                                width: "100%",
                                borderTop: `1px solid ${buttonThemeColor}`,
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export const CaseIntro = ({
    title,
    subtitle,
    children,
    collaborators,
    team,
    theme,
}) => {
    return (
        <div className={`caseIntro color--${theme}`}>
            <div>
                <h2 className="bold"> {title} </h2>
                <h3 style={{ marginBlock: "24px" }}>{subtitle}</h3>
                <p> {children} </p>
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
