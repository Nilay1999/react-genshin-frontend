import "./App.css";
import Signup from "./components/auth/Signup/Signup";
import { LinkContainer } from "react-router-bootstrap";
import NavbarComponent from "./components/navbar/NavbarComponent";
import Routes from "./Routes";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App container py-3">
            <NavbarComponent />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
