import { ParallaxProvider } from "react-scroll-parallax";
import { NavBar, ROUTES } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import "./styles.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { MorePage } from "./pages/MorePage";
import { IntuitPage } from "./pages/IntuitPage";
import { TPCPage } from "./pages/TPCPage";
import { LCBOPage } from "./pages/LCBOPage"
import { Footer } from "./components/Footer";
import { DiaryPage } from "./pages/DiaryPage";

function App() {
    return (
        <div className="app">
            <ParallaxProvider>
                <NavBar />
                <Routes>
                    <Route path={ROUTES.work} element={<HomePage />} />
                    <Route path={ROUTES.more} element={<MorePage />} />
                    <Route path={ROUTES.intuit} element={<IntuitPage />} />
                    <Route path={ROUTES.tpc} element={<TPCPage />} />
                    <Route path={ROUTES.lcbo} element={<LCBOPage />} />
                    <Route path={ROUTES.diary} element={<DiaryPage />} />
                    <Route
                        path="*"
                        element={<Navigate to={ROUTES.work} replace />}
                    />
                </Routes>
                <Footer />
            </ParallaxProvider>
        </div>
    );
}

export default App;
