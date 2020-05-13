import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";
import PrivacyPolicy from "./components/Misc/PrivacyPolicy";
import WebNavBar from "./components/WebNavbar/WebNavbar";
import Footer from "./components/Misc/Footer";
/* Blog */
import Blog from "./components/Blog/Index/Index";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WebNavBar />
      <Switch>
        <Route exact path="/tabs-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
