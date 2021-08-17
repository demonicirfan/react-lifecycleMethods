import React, { Component } from "react";
import Student from "./Student";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("APP - Constructor Called ");
    console.log(props);
    this.state = {
      roll: "101",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("APP - getDerivedStateFromProps Called ");
    console.log(props, state);
  }

  render() {
    return (
      <div>
        <Studen name="Rahul"/>
      </div>
    );
  }
}
