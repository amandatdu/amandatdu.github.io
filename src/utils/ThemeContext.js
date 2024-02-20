import { createContext } from "react";

export const ThemeContext = createContext({ isLightMode: false, toggleLightMode: () => console.log("Missing provider!")});
