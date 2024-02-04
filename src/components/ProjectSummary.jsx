import { StarBlock } from "./StarBlock";
import "./ProjectSummary.css";

export const ProjectSummary = ({ name, description, alignment = "center" }) => {
    return (
        <div className="projectSummary" style={{ justifyContent: alignment }}>
            <div className="projectSummary__title">
                {alignment !== "start" && <StarBlock />}
                <h1>
                    For
                    <i> {name}</i>
                </h1>
                {alignment !== "end" && <StarBlock />}
            </div>
            <p className="projectSummary__description">{description}</p>
        </div>
    );
};
