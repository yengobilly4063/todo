import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header";
import AddTodoScreen from "./screens/AddTodoScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {

  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/todos/add" exact component={AddTodoScreen} />
    </Router>
  );
}

export default App;
