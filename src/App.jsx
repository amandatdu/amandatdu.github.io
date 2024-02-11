import { NavBar, ROUTES } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import "./styles.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { MorePage } from "./pages/MorePage";
import { IntuitPage } from "./pages/IntuitPage";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div className="app">
            <NavBar />
            <Routes>
                <Route path={ROUTES.work} element={<HomePage />} />
                <Route path={ROUTES.more} element={<MorePage />} />
                <Route path={ROUTES.intuit} element={<IntuitPage />} />
                <Route path="*" element={<Navigate to={ROUTES.work} replace/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
