import { Link } from "react-router-dom";
import { ArrowIcon } from "../assets/ArrowIcon";
import "./HighlightCard.css";

export const HighlightCard = ({
    wrapperRef,
    contentRef,
    subtitle,
    title,
    body,
    textPlacement,
    imageData,
    link,
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
                <Link to={link}>
                    <h1>
                        {title}&nbsp;
                        <ArrowIcon />
                    </h1>
                </Link>
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
