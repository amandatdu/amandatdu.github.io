import { HighlightCard } from "../components/HighlightCard";
import { StarIcon } from "../icons/StarIcon";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__banner">
                <h3 className="secondary">hi hello! thank you visiting!</h3>
                <h1 className="display">
                    Amanda Du is a product designer <br /> all about designing
                    experiences <br /> that make people happy
                </h1>
                <div className="homepage__banner__footer">
                    <h4 className="secondary">
                        Previously @ Intuit, Purolator, & LCBO
                    </h4>
                    <StarIcon /> <StarIcon /> <StarIcon />
                    <h4 className="secondary">
                        Currently ... freelance designing!
                    </h4>
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
