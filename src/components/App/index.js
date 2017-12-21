import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import * as loginActions from "../../actions/login";

class App extends Component {
  render() {
    return <div className="App">{this.props.state}</div>;
  }
}

const mapStateToProps = state => state;

const mapDispatch = dispatch => {
  return {
    login: () => dispatch(loginActions.LoginStart())
  };
};

export default connect(mapStateToProps, mapDispatch)(App);
