import "./CaseStudy.css";

export const CaseStudy = ({
    title,
    children,
    image,
    isFullImage,
    imageClass = ""
  }) => {
    return (
      <div className="caseStudy">
        <div className={`caseImage ${imageClass} ${isFullImage ? "full" : ""}`}>
          {image}
        </div>
        <div className="caseContent">
          <h1> {title} </h1>
          <p> {children} </p>
        </div>
      </div>
    );
};

export const CaseIntro= ({
    title,
    children,
    collaborators,
    team,
  }) => {
    return (
      <div className="caseIntro">
        <div >
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


export const SkipButton= ({
    copy,
    buttoncolour,
  }) => {
    return (
      <div className="buttonStyle">
      background-color: {buttoncolour};
      <button onClick={() => console.log('Button clicked')}>{copy}}</button>
    </div>

    );
};
