import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { advice: " " };

  componentDidMount() {
    console.log("Component did mount");
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return <h1> APP </h1>;
  }
}

export default App;
