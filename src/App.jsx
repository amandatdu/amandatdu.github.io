import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import "./styles.css";

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
