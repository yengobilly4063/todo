import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header";

function App() {

  return (
    <Router>
      <Header />
      <h1>Welcome</h1>
    </Router>
  );
}

export default App;
