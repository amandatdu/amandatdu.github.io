import { NavBar, ROUTES } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { MorePage } from "./pages/MorePage";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div className="app">
            <NavBar />
            <Routes>
                <Route path={ROUTES.work} element={<HomePage />} />
                <Route path={ROUTES.more} element={<MorePage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
