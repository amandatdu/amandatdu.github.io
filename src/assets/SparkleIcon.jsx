export const SparkleIcon = ({ top, left, size = "auto", angle = 0 }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sparkleIcon"
            style={{
                top,
                left,
                width: size,
                height: size,
                transform: `rotate(${angle}deg)`,
            }}
        >
            <g clipPath="url(#clip0_1096_36680)">
                <path
                    d="M10.103 6.991C10.3982 4.97108 13.3127 4.97107 13.6079 6.991L13.6439 7.23784C13.7878 8.2221 14.7138 8.89489 15.6943 8.72754L15.9403 8.68557C17.9525 8.34213 18.8531 11.114 17.0233 12.0189L16.7997 12.1295C15.9081 12.5704 15.5544 13.659 16.0165 14.5399L16.1324 14.7608C17.0809 16.5685 14.723 18.2815 13.2969 16.8209L13.1226 16.6424C12.4277 15.9307 11.2831 15.9307 10.5882 16.6424L10.4139 16.8209C8.98783 18.2815 6.62998 16.5684 7.57843 14.7608L7.69434 14.5399C8.1565 13.659 7.80279 12.5704 6.91116 12.1295L6.68755 12.0189C4.85771 11.114 5.75832 8.34213 7.7706 8.68557L8.01653 8.72754C8.99706 8.89489 9.92307 8.2221 10.0669 7.23784L10.103 6.991Z"
                    fill="url(#paint0_linear_1096_36680)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1096_36680"
                    x1="30.5665"
                    y1="-0.0516171"
                    x2="-15.8246"
                    y2="34.5871"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F6F6F6" />
                    <stop offset="0.75" stopColor="#EFB1F9" />
                    <stop offset="1" stopColor="#FF92E8" />
                </linearGradient>
                <clipPath id="clip0_1096_36680">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
