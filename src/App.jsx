import "./App.css";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";

function App() {
    return (
        <div className="app">
            <NavBar />
            <div className="app__body">
                <HomePage />
            </div>
        </div>
    );
}

export default App;
