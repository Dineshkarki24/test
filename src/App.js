import React from "react";
import Contact from "./component/Contact";
import Form from "./component/Form";

class App extends React.Component {
  render() {
    return (
      <>
        <Contact name="data" age="21" />
        <Form data="123" />
      </>
    );
  }
}
export default App;
