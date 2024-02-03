export const HeartSVG = ({ className = "", id, style }) => {
    return (
        <svg
            width="557"
            height="497"
            viewBox="0 0 557 497"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`heartSVG ${className}`}
            style={style}
        >
            <g filter="url(#filter0_f_609_30521)">
                <path
                    d="M278.5 432.166L309.458 405.754C419.41 312.312 492 250.484 492 175.05C492 113.222 440.333 65 374.575 65C337.426 65 301.771 81.2073 278.5 106.619C255.229 81.2073 219.574 65 182.425 65C116.667 65 65 113.222 65 175.05C65 250.484 137.59 312.312 247.543 405.754L278.5 432.166Z"
                    fill={`url(#heart_svg_radial_gradient_${id})`}
                    fillOpacity="0.2"
                />
                <path
                    d="M309.133 405.373L309.134 405.373C364.12 358.643 409.723 319.852 441.584 283.32C473.441 246.793 491.5 212.591 491.5 175.05C491.5 113.529 440.089 65.5 374.575 65.5C337.566 65.5 302.045 81.649 278.869 106.956L278.5 107.359L278.131 106.956C254.955 81.649 219.435 65.5 182.425 65.5C116.911 65.5 65.5 113.529 65.5 175.05C65.5 212.591 83.5586 246.793 115.416 283.32C147.277 319.852 192.88 358.643 247.866 405.373L247.867 405.373L278.5 431.508L309.133 405.373Z"
                    stroke="black"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_609_30521"
                    x="0.208817"
                    y="0.208817"
                    width="556.582"
                    height="496.748"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="32.3956"
                        result="effect1_foregroundBlur_609_30521"
                    />
                </filter>
                <radialGradient
                    id={`heart_svg_radial_gradient_${id}`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(278.746 217.941) rotate(86.7107) scale(167.186 194.394)"
                >
                    <stop stopColor="var(--icon-gradient-low)" />
                    <stop offset="1" stopColor="var(--icon-gradient-high)" />
                </radialGradient>
            </defs>
        </svg>
    );
};
