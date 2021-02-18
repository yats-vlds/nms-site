import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Custom from "./pages/Custom";
import AnimateRocket from "./components/AnimateRocket";
import AnimateHorse from "./components/AnimateHorse";
import kamenRocket from "./assets/kamenRocket.svg"

function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                {/*<Switch>*/}
                {/*    <Route path="/" exact>*/}
                {/*        <Home/>*/}
                {/*    </Route>*/}
                {/*    <Route path="/custom">*/}
                {/*        <Custom type="custom"/>*/}
                {/*    </Route>*/}
                {/*    <Route path="/mobile-and-web">*/}
                {/*        <Custom type="mobile"/>*/}
                {/*    </Route>*/}
                {/*    <Route path="/ui-ux">*/}
                {/*        <Custom/>*/}
                {/*    </Route>*/}
                {/*</Switch>*/}
                {/*<Footer id="contacts"/>*/}
            </div>
        </Router>
    );
}

export default App;
