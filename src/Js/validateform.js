import { Button } from "react-bootstrap";
import React from "react";
import "../css/App.css";
import logo from "../resources/images/logo.png";

const st = {
  lk:
    "https://a0iykk3pdc.execute-api.eu-west-1.amazonaws.com/test/tweets?hashtag="
};


const initialState = {
  name: "",
  nameError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";

    if (!this.state.name) {
      nameError = "hashtags cannot be blank";
    }
    if (this.state.name.indexOf(" ") >= 0) {
      nameError = "hashtags cannot have spaces";
    }

    if (nameError) {
      this.setState({ nameError });
      return false;
    }
    return true;
  };

dialResponse = () => {
    console.log(this.responseText);//should be return value of 1
   };
   
 

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log("Fetch successful");

      // Making an Ajax Rquest to the Api Gateway
      var oReq = new XMLHttpRequest();
      oReq.onload = this.dialResponse;
      oReq.open("get",st.lk + this.state.name, true);
 
      this.setState(initialState);
      this.props.history.replace(`/success`);
    } else {
      console.log("Fetch Invalid");
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="Header">
          <h1>Twitter Sentiment Analysis</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="name"
              placeholder="Enter Hashtags"
              className="textinput"
              value={this.state.name}
              required
              onChange={this.handleChange}
            />
            <div style={{ color: "red", marginBottom: "1%" }}>
              {this.state.nameError}
            </div>
          </div>
          <Button variant="dark" type="submit">
            Fetch data
          </Button>
        </form>
      </div>
    );
  }
}
