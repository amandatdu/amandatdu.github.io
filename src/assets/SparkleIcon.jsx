export const SparkleIcon = ({ top, left, size = "auto" }) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sparkleIcon"
            style={{ top, left, width: size, height: size }}
        >
            <path
                opacity="0.5"
                d="M14.5366 1.30239C14.5933 0.698039 15.4754 0.698039 15.5322 1.30239L16.4028 10.5756C16.4403 10.9755 16.9102 11.1702 17.2196 10.9139L24.3923 4.97239C24.8598 4.58517 25.4836 5.20894 25.0963 5.6764L19.1548 12.8492C18.8986 13.1585 19.0932 13.6284 19.4931 13.6659L28.7663 14.5366C29.3707 14.5933 29.3707 15.4754 28.7663 15.5322L19.4931 16.4028C19.0932 16.4403 18.8986 16.9102 19.1548 17.2196L25.0963 24.3923C25.4836 24.8598 24.8598 25.4836 24.3923 25.0963L17.2196 19.1548C16.9102 18.8986 16.4403 19.0932 16.4028 19.4931L15.5322 28.7663C15.4754 29.3707 14.5933 29.3707 14.5366 28.7663L13.6659 19.4931C13.6284 19.0932 13.1585 18.8986 12.8492 19.1548L5.6764 25.0963C5.20894 25.4836 4.58517 24.8598 4.97239 24.3923L10.9139 17.2196C11.1702 16.9102 10.9755 16.4403 10.5756 16.4028L1.30239 15.5322C0.698041 15.4754 0.698042 14.5933 1.30239 14.5366L10.5756 13.6659C10.9755 13.6284 11.1702 13.1585 10.9139 12.8492L4.97239 5.6764C4.58517 5.20894 5.20894 4.58517 5.6764 4.97239L12.8492 10.9139C13.1585 11.1702 13.6284 10.9755 13.6659 10.5756L14.5366 1.30239Z"
                fill="url(#var(--icon-gradient-id))"
                fillOpacity="0.6"
            />
            <defs>
                <linearGradient
                    id="sparkleIcon-dark-theme"
                    x1="36.1643"
                    y1="1.58807"
                    x2="-16.2239"
                    y2="40.7046"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F6F6F6" />
                    <stop offset="0.75" stopColor="#EFB1F9" />
                    <stop offset="1" stopColor="#FF92E8" />
                </linearGradient>

                <linearGradient
                    id="sparkleIcon-light-theme"
                    x1="-8.20854"
                    y1="2.4255"
                    x2="51.8614"
                    y2="28.2367"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F6F6F6" />
                    <stop offset="0.13" stopColor="#EFB1F9" />
                    <stop offset="0.39" stopColor="#FF929F" />
                </linearGradient>
            </defs>
        </svg>
    );
};
