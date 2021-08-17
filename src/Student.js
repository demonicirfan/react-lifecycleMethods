import React, { Component } from "react";
import Marks from "./Marks";

export class Student extends Component {
  constructor(props) {
    super(props);
    console.log("Students constructor")
    

    this.state = {
      roll: 101,
    };
  }

  clickHandler = () => {
    console.log("Button Clicked");
    this.setState({ roll: this.state.roll + 2 });
  };

  render() {
    console.log(" Students Rendered");
    return (
      <div>
        <Marks roll={this.state.roll} />
        <button onClick={this.clickHandler}>change</button>
      </div>
    );
  }
}

export default Student;
