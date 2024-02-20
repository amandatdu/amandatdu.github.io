const HeartSVG = () => {
    return (
        <svg
            width="641"
            height="581"
            viewBox="0 0 641 581"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="heartSVG"
        >
            <g filter="url(#filter0_f_1032_65556)">
                <path
                    d="M320.5 474.166L351.458 447.754C461.41 354.312 534 292.484 534 217.05C534 155.222 482.333 107 416.575 107C379.426 107 343.771 123.207 320.5 148.619C297.229 123.207 261.574 107 224.425 107C158.667 107 107 155.222 107 217.05C107 292.484 179.59 354.312 289.543 447.754L320.5 474.166Z"
                    fill="url(#paint0_radial_1032_65556)"
                    fillOpacity="0.4"
                />
                <path
                    d="M351.133 447.373L351.134 447.373C406.12 400.643 451.723 361.852 483.584 325.32C515.441 288.793 533.5 254.591 533.5 217.05C533.5 155.529 482.089 107.5 416.575 107.5C379.566 107.5 344.045 123.649 320.869 148.956L320.5 149.359L320.131 148.956C296.955 123.649 261.435 107.5 224.425 107.5C158.911 107.5 107.5 155.529 107.5 217.05C107.5 254.591 125.559 288.793 157.416 325.32C189.277 361.852 234.88 400.643 289.866 447.373L289.867 447.373L320.5 473.508L351.133 447.373Z"
                    stroke="black"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_1032_65556"
                    x="0.599998"
                    y="0.599998"
                    width="639.8"
                    height="579.966"
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
                        stdDeviation="53.2"
                        result="effect1_foregroundBlur_1032_65556"
                    />
                </filter>
                <radialGradient
                    id="paint0_radial_1032_65556"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(320.746 259.941) rotate(89.7923) scale(70.0592 81.4608)"
                >
                    <stop stopColor="#ED4B85" stopOpacity="0.76" />
                    <stop offset="1" stopColor="#FF88A4" stopOpacity="0.77" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export const HeartBanner = () => {
    return (
        <div className="heartBanner">
            <HeartSVG />
        </div>
    );
};
