import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
