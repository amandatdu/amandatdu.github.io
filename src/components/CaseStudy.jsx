import "./CaseStudy.css";

export const CaseStudy = ({ title, description, image}) => {
    return (
      <div className="caseStudy">
        <div className="caseImage">
          {image}
        </div>
        <div className="caseContent">
          <h1> {title} </h1>
          <p> {description} </p>
        </div>
      </div>
    );
};
