import "./CaseStudy.css";

export const CaseHeader = ({ title, caseName, logo, children }) => {
  return (
    <div className={"caseHeader " + caseName}>
      <div
        style={{
          flexDirection: "column",
          width: "434px",
          textAlign: "center",
          padding: "180px",
        }}
      >
        {logo ? logo : null}
        <h1> {title} </h1>
        <p> {children} </p>
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
}) => {
  return (
    <div className="caseStudy">
      <div
        className={`caseImage ${imageClass ? imageClass : ""}${
          isFullImage ? "full" : ""
        }`}
      >
        {image}
      </div>
      <div className="caseContent">
        <h1> {title} </h1>
        <p> {children} </p>
      </div>
    </div>
  );
};

export const CaseIntro = ({ title, children, collaborators, team }) => {
  return (
    <div className="caseIntro">
      <div>
        <h2> {title} </h2>
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
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: `${buttonColour}`,
        borderRadius: "30px",
        padding: "2%",
        maxWidth: "25%",
        textAlign: "center",
      }}
    >
      {buttonText}
    </div>
  );
  // return (
  //   <div className="buttonStyle">
  //     background-color: {buttoncolour};
  //     <button onClick={() => console.log("Button clicked")}>{copy}</button>
  //   </div>
  // );
};
