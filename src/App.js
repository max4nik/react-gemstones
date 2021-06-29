import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Catalog from "./pages/Catalog/CatalogController";
import ItemPage from "./pages/ItemPage";
import Cart from "./pages/Cart/CartController";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/catalog" component={Catalog} />
        <ProtectedRoute exact path="/checkout" component={Checkout} />
        <ProtectedRoute exact path="/checkout/success" component={Success} />
        <ProtectedRoute path={"/catalog/:id"} component={ItemPage} />
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
