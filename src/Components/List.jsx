import React from "react";
import AllSelected from "./ListFilter/AllSelected";


function List(props) {
  const toggleAllFunction = () => {
    props.setToggleAll((prev) => !prev);

    if (!props.toggleAll) {
      props.list.map((item) => (item.done = true));
    } else {
      props.list.map((item) => (item.done = false));
    }
  };

  const handleItemChange = (item) => {
    props.setList(
      props.list.map((query) => {
        if (query.id === item.id) {
          return { ...query, done: !query.done };
        }
        return query;
      })
    );
  };

  const removeItem = (id) => {
    const removedList = props.list.filter((query) => query.id !== id);
    props.setList(removedList);
  };
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        onChange={toggleAllFunction}
        checked={props.toggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      {props.allButton ? (
        <AllSelected
          handleItemChange={handleItemChange}
          list={props.list}
          removeItem={removeItem}
        />
      ) : null}
      {props.activeButton ? (
        <AllSelected
          handleItemChange={handleItemChange}
          list={props.activeList}
          removeItem={removeItem}
        />
      ) : null}
      {props.completedButton ? (
        <AllSelected
          handleItemChange={handleItemChange}
          list={props.completedList}
          removeItem={removeItem}
        />
      ) : null}
    </section>
  );
}

export default List;
