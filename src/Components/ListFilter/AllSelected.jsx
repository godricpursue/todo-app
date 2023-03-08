import React from "react";

function AllSelected(props) {
  return (
    <div>
      <ul className="todo-list">
        {props.list.map((item, i) => (
          <li className={item.done ? "completed" : ""} key={i}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => props.handleItemChange(item)}
                checked={item.done}
              />
              <label>{item.item}</label>
              <button onClick={() => props.removeItem(item.id)} className="destroy" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllSelected;
