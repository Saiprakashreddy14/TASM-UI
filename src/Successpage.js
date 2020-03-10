import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

export default class SuccessPage extends React.Component {
  goBack = event => {
    event.preventDefault();
    this.props.history.replace(`/`);
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron text-center contentsucc">
          <h1 className="display-3 textst">
            Request has been Successfully Submitted
          </h1>
          <Button variant="dark" onClick={this.goBack}>
            Home
          </Button>
        </div>
      </div>
    );
  }
}
