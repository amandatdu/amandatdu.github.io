import { Link } from "react-router-dom";
import { ArrowIcon } from "../assets/ArrowIcon";
import "./HighlightCard.css";
import { Parallax, useParallaxController } from "react-scroll-parallax";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";

function Image(props) {
    const parallaxController = useParallaxController();

    // updates cached values after image dimensions have loaded
    const handleLoad = () => parallaxController.update();

    return (
        <img
            src={props.src}
            onLoad={handleLoad}
            alt={props.alt}
            style={props.style}
        />
    );
}

const ParallaxImage = ({ src, alt, style, deltaY, targetElement }) => (
    <Parallax
        speed={20}
        translateY={[deltaY, -deltaY]}
        targetElement={targetElement}
        easing={[0.5, 0.25, 0.5, 0.75]}
    >
        <Image src={src} alt={alt} style={style} />
    </Parallax>
);

export const HighlightCard = ({
    subtitle,
    title,
    body,
    textPlacement,
    imageData,
    link,
}) => {
    const { src, alt, background, style } = imageData;
    const placementProp = textPlacement ?? "left";

    const { setMode } = useContext(ThemeContext);
    const ref = useRef();
    const [targetElement, setElement] = useState(null);
    useEffect(() => {
        setElement(ref.current);
    }, []);

    const imageElement = (
        <div ref={ref} className="highlightcard__image">
            <ParallaxImage
                src={src}
                alt={alt}
                style={style}
                deltaY={25}
                targetElement={targetElement}
            />
            {background}
        </div>
    );

    return (
        <div className={`highlightcard ${placementProp}`}>
            {placementProp === "right" && imageElement}
            <div className="highlightcard__content">
                <h3 className="h3--subheading color--strawberry">{subtitle}</h3>
                <Link to={link} onClick={() => setMode(true)}>
                    <h1>
                        {title}&nbsp;
                        <ArrowIcon />
                    </h1>
                </Link>
                <p>{body}</p>
            </div>
            {placementProp === "left" && imageElement}
        </div>
    );
};
