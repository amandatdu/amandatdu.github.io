import { useCallback, useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { NavBar, ROUTES } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { MorePage } from "./pages/MorePage";
import { IntuitPage } from "./pages/IntuitPage";
import { Footer } from "./components/Footer";
import { DiaryPage } from "./pages/DiaryPage";
import { ThemeContext } from "./utils/ThemeContext";
import "./App.css";
import "./styles.css";

const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>;
};

function App() {
    const [isLightMode, setIsLightMode] = useState(false);
    const prev = useRef(false);

    const toggleLightMode = useCallback(() => {
        const prevValue = prev.current;

        setIsLightMode(!prevValue);
        document.body.classList.toggle("lightTheme", !prevValue);
        prev.current = !prevValue;
    }, []);

    return (
        <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
            <ScrollToTop>
                <div className="app">
                    <ParallaxProvider>
                        <NavBar />
                        <Routes>
                            <Route path={ROUTES.work} element={<HomePage />} />
                            <Route path={ROUTES.more} element={<MorePage />} />
                            <Route
                                path={ROUTES.intuit}
                                element={<IntuitPage />}
                            />
                            <Route
                                path={ROUTES.diary}
                                element={<DiaryPage />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to={ROUTES.work} replace />}
                            />
                        </Routes>
                        <Footer />
                    </ParallaxProvider>
                </div>
            </ScrollToTop>
        </ThemeContext.Provider>
    );
}

export default App;
