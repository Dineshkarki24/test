import React, { Component } from "react";
import Child from "./Child";

class Form extends Component {
  render() {
    return (
      <>
        <h1>Form</h1>
        <Child data1={this.props.data} />
      </>
    );
  }
}

export default Form;
