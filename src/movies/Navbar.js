import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      movies: ""
    };
  }
  handleChange = e => {
    if (!e.target.value == "") {
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=02689249b40636b114a2add6006bff65&query=${e.target.value}`
      )
        .then(data => this.props.data(data))
        .catch(err => console.log(err));
    }
  };
  render() {
    console.log(this.props);
    return (
      <>
        <form action="">
          <input
            onChange={this.handleChange}
            type="search"
            placeholder="search Movies"
          />
        </form>
      </>
    );
  }
}

export default Navbar;
