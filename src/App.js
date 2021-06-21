import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import Checkout from "./components/checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//commence par le routeur puis le switch puis la route---

//dans firebase creer une application web </> et copier la config
//pour setup firebase ::: npm install -g firebase tools (firebasse init /firebase login firebase dep )
