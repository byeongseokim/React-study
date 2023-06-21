import React, { Component } from "react";
import StyledComponent from "./StyledComponent";
import CSSModule from "./CSSModule";
import SassComponent from "./SassComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledComponent />
      </div>
    );
  }
}

export default App;
