import React from "react";
import shortid from "shortid";
import { Button, TextField } from "@material-ui/core";

export default class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <TextField
          label="Task"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add a task..."
        />
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}
