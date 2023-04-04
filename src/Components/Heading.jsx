import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Heading(props) {
  const [input, setInput] = useState("");

  // This function creates a new todo item object using the uuid library
  // and adds it to the list in the parent component using the setList function
  const addItem = (input) => {
    const newItem = {
      id: uuid().slice(0, 4),
      item: input,
      done: false,
    };
    props.setList([...props.list, newItem]);
    setInput(""); // Clear input box after adding a new item
  };

  // This function is called when the form is submitted and it prevents the
  // default behavior of the browser which would refresh the page
  const submitForm = (e) => {
    e.preventDefault();
    if (input === "") {
      return false;
    }
    addItem(input);
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={submitForm}>
          <input
            className="new-todo"
            value={input}
            placeholder="What needs to be done?"
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>
      </header>
    </>
  );
}

export default Heading;
