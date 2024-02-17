export const ArrowIcon = ({ direction = "right" }) => {
    const directionMap = {
        right: 0,
        down: 90,
        left: 180,
        up: -90,
    };
    return (
        <svg
            width="34"
            height="28"
            viewBox="0 0 34 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${directionMap[direction]}deg)` }}
        >
            <path
                d="M3 14.1204L29.3174 13.2633"
                stroke="var(--blueberry-swirl)"
                strokeWidth="4.52989"
                strokeLinecap="round"
            />
            <path
                d="M21.9761 25.4451C24.3377 24.9728 30.9997 16.5221 30.9997 13.7708C30.9997 11.8223 21.0109 4.15176 18.9307 3.11163"
                stroke="var(--blueberry-swirl)"
                strokeWidth="4.52989"
                strokeLinecap="round"
            />
        </svg>
    );
};
