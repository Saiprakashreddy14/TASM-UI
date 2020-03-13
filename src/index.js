import React from "react";
import ReactDOM from "react-dom";
import "../src/css/index.css"
import App from "../src/Js/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />{" "}
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
