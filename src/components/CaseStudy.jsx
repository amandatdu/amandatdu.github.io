import "./CaseStudy.css";

export const CaseHeader = ({ title, caseName, logo, children, textColor }) => {
  return (
    <div className={"caseHeader " + caseName}>
      <div
        style={{
          flexDirection: "column",
          width: "434px",
          textAlign: "center",
          padding: "160px",
          color: `${textColor}`
        }}
      >
        <div>{logo ? logo : null}</div>
        <h1> {title} </h1>
        <p style={{color: `${textColor}`}}> {children} </p>
      </div>
    </div>
  );
};


export const CaseHMW = ({HMWstatement, title, backgroundColor}) => {
  return (
    <div className="caseHMW" style={{backgroundColor: `${backgroundColor}`}}>
      <div maxWidth="80%">
        <h3 style={{
          paddingBottom: "24px",
        }}> {title} </h3>
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
  textColor,
  buttonBar
}) => {
  return (
    <div className="caseStudy" id={idName ? `${idName}` : ""}>
      <div
        className={`caseImage ${imageClass ? imageClass : ""}${
          isFullImage ? "full" : ""
        }`}
      >
        {image}
      </div>
      <div className={"caseContent" + `${buttonBar ? " buttons" : ""}`}>
        <h1 style={{color: `${textColor}`}}> {title} </h1>
        <p> {children} </p>
      </div>
    </div>
  );
};

export const CaseIntro = ({ title, children, collaborators, team, textColor }) => {
  return (
    <div className="caseIntro">
      <div>
        <h2 style={{color: `${textColor}`}}> {title} </h2>
        <p> {children} </p>
      </div>
      <div className="caseContext">
        <div>
          <h3 style={{color: `${textColor}`}}> Collaborators </h3>
          <p> {collaborators} </p>
        </div>
        <div>
          <h3 style={{color: `${textColor}`}}> Team</h3>
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
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: `${buttonColour}`,
        borderRadius: "30px",
        padding: "15px",
        paddingRight: "30px",
        paddingLeft: "30px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "nowrap",
        margin: "2%",
        color:"white"
      }}
    >
      <div>
      {buttonText}
      </div>
    </div>
  );
};

export const LinkButton = ({ buttonText, targetUrl, buttonColour }) => {
  const handleClick = () => {
    window.open(targetUrl, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: `${buttonColour}`,
        borderRadius: "30px",
        padding: "15px",
        paddingRight: "30px",
        paddingLeft: "30px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "nowrap",
        margin: "2%",
        color:"white"
      }}
    >
      <div>
      {buttonText}
      </div>
    </div>
  );
};

