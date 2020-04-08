import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <Typography variant="h1">React To-do List</Typography>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
