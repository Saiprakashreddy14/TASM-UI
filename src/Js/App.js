import React from "react";
import "../css/App.css";
import ValiationForm from "./validateform";
import SuccessPage from "./Successpage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ValiationForm} />
      <Route path="/success" exact component={SuccessPage} />
    </Switch>
  );
}
export default App;
