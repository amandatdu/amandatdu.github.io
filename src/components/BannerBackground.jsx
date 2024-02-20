import { useContext } from "react";
import { HeartBanner } from "./HeartBanner";
import { StarBanner } from "./StarBanner";
import { ThemeContext } from "../utils/ThemeContext";
import "./BannerBackground.css";

export const BannerBackground = () => {
    const { isLightMode } = useContext(ThemeContext);
    return isLightMode ? <HeartBanner /> : <StarBanner />;
};
