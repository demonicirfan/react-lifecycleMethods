import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);
    console.log("Marks constructor")
    this.state = {
      mroll: this.props.roll,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Get derived state from props");
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    }
    return null;
  }

  render() {
    console.log(" Marks Rendered");
    return (
      <div>
        <h1>{this.state.mroll}</h1>
      </div>
    );
  }
}
