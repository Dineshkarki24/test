import React, { Component } from "react";

class Contact extends Component {
  render() {
    console.log(this.props.name);
    console.log(this.props.age);
    return (
      <>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.age}</li>
        </ul>
      </>
    );
  }
}
export default Contact;
