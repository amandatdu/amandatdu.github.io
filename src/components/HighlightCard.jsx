import { useEffect, useRef } from "react";
import "./HighlightCard.css";
import { clamp } from "../utils/helper";
import { ArrowIcon } from "../assets/ArrowIcon";

export const HighlightCard = ({
    subtitle,
    title,
    body,
    textPlacement,
    image,
}) => {
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
            {placementProp === "right" && (
                <div className="highlightcard__image">{image}</div>
            )}
            <div className="highlightcard__content">
                <h3 className="h3--subheading color--strawberry">{subtitle}</h3>
                <h1>
                    {title}&nbsp;
                    <ArrowIcon />
                </h1>
                <p>{body}</p>
            </div>
            {placementProp === "left" && (
                <div className="highlightcard__image">{image}</div>
            )}
        </div>
    );
};
