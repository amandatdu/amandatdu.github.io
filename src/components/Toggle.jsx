import { useContext, useRef } from "react";
import { restartAnimations } from "../utils/helper";
import { ThemeContext } from "../utils/ThemeContext";
import "./Toggle.css";

const Star = () => (
    <svg
        width="21"
        height="21"
        viewBox="0 1 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon star"
    >
        <path
            d="M8.65614 2.13326C9.29659 0.382895 11.7721 0.382896 12.4126 2.13326L13.6094 5.40408C13.8886 6.16739 14.6021 6.68576 15.4144 6.71551L18.8949 6.84296C20.7575 6.91117 21.5225 9.26556 20.0557 10.4156L17.3148 12.5645C16.6752 13.066 16.4027 13.9047 16.6254 14.6864L17.5797 18.036C18.0904 19.8285 16.0876 21.2836 14.5407 20.244L11.6499 18.3013C10.9753 17.8479 10.0934 17.8479 9.41879 18.3013L6.52805 20.244C4.98108 21.2836 2.97831 19.8285 3.48902 18.036L4.44335 14.6864C4.66607 13.9047 4.39354 13.066 3.75389 12.5645L1.01298 10.4156C-0.453807 9.26556 0.311183 6.91117 2.17378 6.84297L5.65434 6.71551C6.46661 6.68576 7.18008 6.16739 7.45937 5.40408L8.65614 2.13326Z"
            fill="white"
        />
    </svg>
);

const Heart = () => (
    <svg
        width="21"
        height="19"
        viewBox="0 -1 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon heart"
    >
        <path
            d="M0 6.15452C0 11.2668 4.04238 13.9919 6.99874 16.4314C8.04453 17.2902 9.0501 18.1006 10.0557 18.1006C11.0612 18.1006 12.0668 17.2902 13.1126 16.4314C16.069 13.9919 20.1113 11.2668 20.1113 6.15452C20.1113 1.04021 14.5807 -2.58587 10.0557 2.32934C5.53062 -2.58587 0 1.04222 0 6.15452Z"
            fill="var(--syo-pink)"
        />
    </svg>
);

export const Toggle = () => {
    const { isLightMode, toggleLightMode } = useContext(ThemeContext);
    const ref = useRef();

    const onClick = () => {
        toggleLightMode();
        if (ref.current) {
            restartAnimations(ref.current);
        }
    };

    const verticalLineHorizontalOffset = isLightMode
        ? "calc(var(--toggle-width) - var(--icon-size) / 2 - var(--icon-gap) - var(--long-line-width) / 2)"
        : "calc(var(--icon-size) / 2 + var(--icon-gap) - var(--long-line-width) / 2)";

    const horizontalLineHorizontalOffset =
        "var(--toggle-width) - var(--icon-size) - 2 * var(--icon-gap)";

    return (
        <div ref={ref} className="toggle" onClick={onClick}>
            <Star />
            <Heart />
            <div
                className="long horizontal"
                style={{
                    ...(isLightMode && {
                        transform: `translateX(calc(${horizontalLineHorizontalOffset}))`,
                    }),
                    animationName: "lineleft",
                }}
            />
            <div
                className="long horizontal"
                style={{
                    ...(!isLightMode && {
                        transform: `translateX(calc(-1 * (${horizontalLineHorizontalOffset})))`,
                    }),
                    animationName: "lineright",
                }}
            />
            <div
                className="long vertical"
                style={{
                    transform: `translateX(${verticalLineHorizontalOffset})`,
                    animationName: "lineup",
                }}
            />
            <div
                className="long vertical"
                style={{
                    transform: `translateY(var(--toggle-height)) translateX(${verticalLineHorizontalOffset})`,
                    animationName: "linedown",
                }}
            />
        </div>
    );
};
