import { useEffect, useRef } from "react";
import "./HighlightCard.css";
import { clamp } from "../utils/helper";

export const HighlightCard = ({ textPlacement }) => {
    const placementProp = textPlacement ?? "left";
    const ref = useRef(undefined);

    useEffect(() => {
        const scrollHandler = () => {
            // Value of the variable: start at a 0 and moving towards 1
            ref.current.style.setProperty(
                "--scroll-highlight-card",
                clamp(
                    window.innerHeight -
                        ref.current.getBoundingClientRect()?.top -
                        ref.current.scrollHeight / 2,
                    0,
                    window.innerHeight
                ) / window.innerHeight // animation should move for the full length of the page height
            );
        };

        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <div ref={ref} className={`highlightcard ${placementProp}`}>
            <div className="highlightcard__content">
                <h3>Product design internship - 2022</h3>
                <h1>Made filling taxes more delightful</h1>
                <p>
                    I redesigned <strong>TurboTax Canada's</strong> onboarding
                    experience. Want to read about how I reduced 78% of user
                    decisions and still gave them a confident experience?
                </p>
            </div>
            <div className="highlightcard__image">
                <div
                    style={{
                        background: "red",
                        width: "200px",
                        height: "360px",
                    }}
                ></div>
            </div>
        </div>
    );
};
