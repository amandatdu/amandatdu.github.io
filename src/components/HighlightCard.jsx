import "./HighlightCard.css";
import { ArrowIcon } from "../assets/ArrowIcon";

export const HighlightCard = ({
    wrapperRef,
    contentRef,
    subtitle,
    title,
    body,
    textPlacement,
    imageData,
}) => {
    const { src, alt, background, style } = imageData;
    const placementProp = textPlacement ?? "left";

    return (
        <div ref={wrapperRef} className={`highlightcard ${placementProp}`}>
            {placementProp === "right" && (
                <div className="highlightcard__image">
                    <img ref={contentRef} src={src} alt={alt} style={style} />
                    {background}
                </div>
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
                <div className="highlightcard__image">
                    <img ref={contentRef} src={src} alt={alt} style={style} />
                    {background}
                </div>
            )}
        </div>
    );
};
