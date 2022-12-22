import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FormTodo(props) {

  const [value, setValue] = React.useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props.addTodo(value);
    setValue("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form.Group>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary mb-3 mt-3" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default FormTodo;
