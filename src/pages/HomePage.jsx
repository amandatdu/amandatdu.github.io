import { HighlightCard } from "../components/HighlightCard";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <div className="homepage">
            <HighlightCard />
            {/* <HighlightCard textPlacement="right" />
            <HighlightCard /> */}
            <HighlightCard textPlacement="right" />

            <HighlightCard />
        </div>
    );
};
