import { BannerBackground } from "../components/BannerBackground";
import { ImageCaption } from "../components/ImageCaption";
import { ProjectSummary } from "../components/ProjectSummary";
import "./MorePage.css";

export const MorePage = () => {
    return (
        <div className="morePage">
            <div className="morePage__banner">
                <BannerBackground />
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
            <img
                src="/more/FC-graphic-x2.png"
                alt="Fashion for Change banner"
                className="morePage__fcGraphic"
            />
            <div className="morePage__starterhacks">
                <ProjectSummary
                    name="Starterhacks"
                    description="a hackathon made for beginners.
                        here I was able to bring mascots to life, and create social media content."
                    alignment="start"
                />
                <img
                    src="/more/Starterhacks-graphic-x1.png"
                    alt="Starterhacks graphic"
                    className="morePage__starterhacks__graphic"
                />
            </div>
            <ProjectSummary
                name="school"
                description="digital arts was one of the coolest things I've learned."
            />
            <div className="morePage__gallery">
                <ImageCaption
                    src="/more/we-can-still-do-it.png"
                    alt="We can still do it poster"
                    caption="feminist poster pack"
                />
                <ImageCaption
                    src="/more/feminist-fist.png"
                    alt="Feminist fist poster"
                    caption="feminist poster pack"
                />
                <ImageCaption
                    src="/more/long-exposure.png"
                    alt="Long exposure photography"
                    caption="long exposure photography"
                />
                <ImageCaption
                    src="/more/86-respect.png"
                    alt="Poster for car loving friend"
                    caption="poster for car loving friend"
                />
            </div>
            <ProjectSummary name="me" description="last but not least <3" />
            <div className="morePage__gallery">
                <ImageCaption
                    src="/more/summertime-sadness.png"
                    alt="Summertime sadness"
                    caption="'summertime sadness'"
                />
                <ImageCaption
                    isVideo
                    style={{ width: "354px"}}
                    src="more/firstanimation.mp4"
                    alt="Hand drawn animation"
                    caption="my first hand drawn animation"
                />
            </div>
            <h2 className="morePage__footer">
                graphic design is my passion so there
                <br />
                is more to come &lt;3
            </h2>
        </div>
    );
};
