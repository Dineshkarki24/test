import React, { Component } from "react";

class Child extends Component {
  render() {
    console.log(this.props.data1);
    return <h1>Child</h1>;
  }
}

export default Child;
