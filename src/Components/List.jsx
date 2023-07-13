import React from "react";
import AllSelected from "./ListFilter/AllSelected";

function List(props) {
  // Function to toggle all items as done or not done
  const toggleAllFunction = () => {
    props.setToggleAll((prev) => !prev);

    // If toggleAll is false, set all items as done
    if (!props.toggleAll) {
      props.list.map((item) => (item.done = true));
    } else {
      // Otherwise, set all items as not done
      props.list.map((item) => (item.done = false));
    }
  };

  // Function to handle the change in an item's done status
  const handleItemChange = (item) => {
    props.setList(
      props.list.map((query) => {
        // If the item id matches the id of the current query, change its done status
        if (query.id === item.id) {
          return { ...query, done: !query.done };
        }
        // Otherwise, return the query as is
        return query;
      })
    );
  };

  // Function to remove an item from the list
  const removeItem = (id) => {
    const removedList = props.list.filter((query) => query.id !== id);
    props.setList(removedList);
    localStorage.setItem("localList", JSON.stringify(removedList));
  };

  return (
    <section className="main">
      {/* Checkbox to toggle all items */}
      <div className="input-container">
        <input
          className="toggle-all"
          type="checkbox"
          onChange={toggleAllFunction}
          checked={props.toggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
      {/* Display items based on the selected filter */}
      {props.allButton ? (
        <AllSelected
          handleItemChange={handleItemChange}
          list={props.list}
          removeItem={removeItem}
          updateItem={props.updateItem}
        />
      ) : null}
      {props.activeButton ? (
        <AllSelected
          handleItemChange={handleItemChange}
          list={props.activeList}
          removeItem={removeItem}
          updateItem={props.updateItem}
        />
      ) : null}
      {props.completedButton ? (
        <AllSelected
          handleItemChange={handleItemChange}
          list={props.completedList}
          removeItem={removeItem}
          updateItem={props.updateItem}
        />
      ) : null}
    </section>
  );
}

export default List;
