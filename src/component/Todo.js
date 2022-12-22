import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo(props) {
  return (
    <div
      className="todo"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Button
          variant="primary"
          style={{ color: "#666", marginRight: 5 }}
          onClick={() => props.markTodo(props.index)}
        >
          ✔️
        </Button>
        <Button variant="warning" onClick={() => props.unMarkTodo(props.index)}>
          ❌
        </Button>
      </div>
      <span
        style={{
          fontSize: "1.1 rem",
          textDecoration: props.todo.isDone ? "line-through" : "none",
          padding: "5 20",
          wordWrap: "wrap",
          maxWidth: "10rem",
        }}
      >
        {props.todo.text}
      </span>
      <Button
        variant="danger"
        style={{ color: "red" }}
        onClick={() => props.removeTodo(props.index)}
      >
        🗑
      </Button>
    </div>
  );
}

export default Todo;
