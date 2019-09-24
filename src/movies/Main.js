import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Movies from "./movies";
import Navbar from "./Navbar";

class Main extends Component {
  state = {
    data: []
  };
  handleData = data => {
    this.setState({ data: data.data.results });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar data={this.handleData} />
          <Switch>
            <Route
              path="/"
              render={props => <Home data={this.state.data} {...props} />}
            />
            <Route path="/search" render={props => <Movies {...props} />} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Main;
