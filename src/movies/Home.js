import React, { Component } from "react";
import Axios from "axios";

class Home extends Component {
  render() {
    console.log(this.props.data);
    return (
      <>
        {this.props.data.length !== 0 &&
          this.props.data.map(data => {
            console.log(data);

            return (
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                alt=""
              />
            );
          })}
      </>
    );
  }
}

export default Home;
