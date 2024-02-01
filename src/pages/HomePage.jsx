import { HighlightCard } from "../components/HighlightCard";
import { StarIcon } from "../icons/StarIcon";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__banner">
                <h3 className="color__vanilla-chocolate">
                    hi hello! thank you for visiting!
                </h3>
                <h1 className="display color__acai-bowl">
                    <i className="color__blueberry-swirl">Amanda Du</i> is a
                    <i className="color__blueberry-swirl"> product designer </i>
                    <br /> all about designing experiences <br /> that make
                    people happy
                </h1>
                <div className="homepage__banner__footer">
                    <h3 className="medium color__strawberry">
                        <b>Previously:</b> @ Intuit, Purolator, & LCBO
                    </h3>
                    <StarIcon /> <StarIcon /> <StarIcon />
                    <h3
                        className="medium color__strawberry"
                        style={{ justifySelf: "start" }}
                    >
                        <b className="bold">Currently:</b> freelance designing!
                    </h3>
                </div>
            </div>
            <div className="homepage__divider">
                <h2>Lately I have...</h2>
            </div>
            <HighlightCard />
            <HighlightCard textPlacement="right" />
            <HighlightCard />
        </div>
    );
};
