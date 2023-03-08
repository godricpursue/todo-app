import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Heading(props) {
  const [input, setInput] = useState("");

  const addItem = (input) => {
    const newItem = {
      id: uuid().slice(0, 4),
      item: input,
      done: false,
    };

    //  add item to the list
    props.setList([...props.list, newItem]);

    // clear input box
    setInput("");
  };

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
