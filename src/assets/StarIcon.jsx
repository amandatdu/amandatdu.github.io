import "./icons.css";

export const StarIcon = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="starIcon"
        >
            <path
                d="M0.731145 8.49553C0.00715399 8.12355 0.00715192 7.08859 0.731142 6.71661L4.39941 4.83185C4.58519 4.73639 4.73641 4.58517 4.83187 4.39939L6.71663 0.731124C7.08861 0.00713313 8.12356 0.00713118 8.49555 0.731122L10.3803 4.39939C10.4758 4.58517 10.627 4.73639 10.8128 4.83184L14.481 6.7166C15.205 7.08859 15.205 8.12354 14.481 8.49553L10.8128 10.3803C10.627 10.4757 10.4758 10.627 10.3803 10.8127L8.49555 14.481C8.12357 15.205 7.08861 15.205 6.71663 14.481L4.83187 10.8127C4.73641 10.627 4.58519 10.4757 4.39941 10.3803L0.731145 8.49553Z"
                fill="url(#paint0_linear_609_30866)"
                fillOpacity="0.6"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_609_30866"
                    x1="1.52656"
                    y1="-1.94748"
                    x2="19.2125"
                    y2="21.739"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="var(--icon-gradient-low)" />
                    <stop offset="0.75" stopColor="var(--icon-gradient-mid)" />
                    <stop offset="1" stopColor="var(--icon-gradient-high)" />
                </linearGradient>
            </defs>
        </svg>
    );
};
