import { createContext } from "react";

const missingFunction = () => console.log("Missing provider!");

export const ThemeContext = createContext({
    isLightMode: false,
    toggleLightMode: missingFunction,
    setMode: missingFunction,
});
