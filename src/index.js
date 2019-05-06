import React from "react";
import ReactDOM from "react-dom";
import Progress from "./components/progress";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Olá Bruno</h1>

      <Progress />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
