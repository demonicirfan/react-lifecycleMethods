import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);
    console.log("Marks constructor");
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Mark - shouldComponentUpdate");
    if (this.state.mroll < 110) {
      console.log(nextProps, nextState);
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("Marks - getSnapshotBeforeUpdate - it runs before update")
      console.log(prevProps, prevState)
  }
  componentDidUpdate(prevProps, prevState, snapshot){
      console.log("Marks - component did update - it runs after update")
      console.log(prevProps, prevState, snapshot)
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
