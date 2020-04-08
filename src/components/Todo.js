import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default (props) => (
  <ListItem style={{ display: "flex" }}>
    <Checkbox
      checked={props.todo.complete}
      onClick={props.toggleComplete}
    ></Checkbox>
    <Typography
      variant="body1"
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </Typography>
    <IconButton onClick={props.onDelete}>
      <CloseIcon />
    </IconButton>
  </ListItem>
);
