import React from "react";
import { useState, useEffect } from "react";

function Footer(props) {
  const [itemsLeft, setItemsLeft] = useState([]);

  const completedAll = () => {
    let filteredAll = props.list.filter((item) => item.done === false);
    props.setList(filteredAll);
  };

  const allButtonFunc = () => {
    props.setActiveButton(false);
    props.setAllButton(true);
    props.setCompletedButton(false);
    console.log(
      "all:" + props.allButton,
      "active:" + props.activeButton,
      "completed:" + props.completedButton
    );
  };

  const completedButtonFunc = () => {
    props.setActiveButton(false);
    props.setAllButton(false);
    props.setCompletedButton(true);
    console.log(
      "all:" + props.allButton,
      "active:" + props.activeButton,
      "completed:" + props.completedButton
    );
  };

  const activeButtonFunc = () => {
    props.setActiveButton(true);
    props.setAllButton(false);
    props.setCompletedButton(false);
    console.log(
      "all:" + props.allButton,
      "active:" + props.activeButton,
      "completed:" + props.completedButton
    );
  };

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
