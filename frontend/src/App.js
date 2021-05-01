import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header";
import TodoAddScreen from "./screens/TodoAddScreen";
import HomeScreen from "./screens/HomeScreen";
import TodoDetailsScreen from "./screens/TodoDetailsScreen";

function App() {

  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/todos/add" exact component={TodoAddScreen} />
      <Route path="/todos/details/:id" exact component={TodoDetailsScreen} />
    </Router>
  );
}

export default App;
