import { ProjectSummary } from "../components/ProjectSummary";
import "./MorePage.css";

export const MorePage = () => {
    return (
        <div className="morePage">
            <div className="morePage__banner">
                <h1 className="h1--display color--acai-bowl">
                    <i className="color--blueberry-swirl">product designer</i>{" "}
                    by day
                    <br />
                    <i className="color--blueberry-swirl">doodler</i> by night
                </h1>
                <p>
                    here's a collection of graphics, illustrations, and <br />
                    photography for myself or people/organizations I love.
                </p>
            </div>
            <ProjectSummary
                name="Fashion for Change"
                description="a student club that runs a fashion show for unicef.
                        here are some showbook designs that I created for the
                        2020 show."
            />
            <ProjectSummary
                name="Starterhacks"
                description="a student club that runs a fashion show for unicef.
                        here are some showbook designs that I created for the
                        2020 show."
                alignment="start"
            />
            <ProjectSummary
                name="school"
                description="digital arts was one of the coolest things I've learned."
            />
            <ProjectSummary name="me" description="last but not least <3" />
            <h2 className="morePage__footer">
                graphic design is my passion so there
                <br />
                is more to come &lt;3
            </h2>
        </div>
    );
};
