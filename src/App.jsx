import { ParallaxProvider } from "react-scroll-parallax";
import { NavBar, ROUTES } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import "./styles.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { MorePage } from "./pages/MorePage";
import { IntuitPage } from "./pages/IntuitPage";
import { Footer } from "./components/Footer";
import { DiaryPage } from "./pages/DiaryPage";
import { useEffect } from "react";

const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>;
};

function App() {
    return (
        <ScrollToTop>
            <div className="app">
                <ParallaxProvider>
                    <NavBar />
                    <Routes>
                        <Route path={ROUTES.work} element={<HomePage />} />
                        <Route path={ROUTES.more} element={<MorePage />} />
                        <Route path={ROUTES.intuit} element={<IntuitPage />} />
                        <Route path={ROUTES.diary} element={<DiaryPage />} />
                        <Route
                            path="*"
                            element={<Navigate to={ROUTES.work} replace />}
                        />
                    </Routes>
                    <Footer />
                </ParallaxProvider>
            </div>
        </ScrollToTop>
    );
}

export default App;
