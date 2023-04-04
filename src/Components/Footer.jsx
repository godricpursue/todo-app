import React from "react";
import { useState, useEffect } from "react";
function Footer(props) {
  // State to keep track of number of items left
  const [itemsLeft, setItemsLeft] = useState([]);

  // Function to clear all completed items
  const completedAll = () => {
    let filteredAll = props.list.filter((item) => item.done === false);
    props.setList(filteredAll);
  };

  // Functions to handle button clicks to filter the list
  const allButtonFunc = () => {
    props.setActiveButton(false);
    props.setAllButton(true);
    props.setCompletedButton(false);
  };

  const completedButtonFunc = () => {
    props.setActiveButton(false);
    props.setAllButton(false);
    props.setCompletedButton(true);
  };

  const activeButtonFunc = () => {
    props.setActiveButton(true);
    props.setAllButton(false);
    props.setCompletedButton(false);
  };

  // Use effect to update items left whenever the list or toggleAll state changes
  useEffect(() => {
    setItemsLeft(props.list.filter((item) => item.done === false));
  }, [props.list, props.toggleAll]);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft.length} </strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <button
            onClick={allButtonFunc}
            className={
              props.allButton ? "selected selection-button" : "selection-button"
            }
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={activeButtonFunc}
            className={
              props.activeButton
                ? "selected selection-button"
                : "selection-button"
            }
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={completedButtonFunc}
            className={
              props.completedButton
                ? "selected selection-button"
                : "selection-button"
            }
          >
            Completed
          </button>
        </li>
      </ul>
      <button onClick={() => completedAll()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
