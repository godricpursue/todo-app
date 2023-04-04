import React from "react";

function AllSelected(props) {
  const [editedItem, setEditedItem] = React.useState(null);

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
              {editedItem && editedItem.id === item.id ? (
                <input
                  className="edit-item"
                  type="text"
                  value={editedItem.item}
                  onChange={(e) =>
                    setEditedItem({ ...editedItem, item: e.target.value })
                  }
                  onBlur={() => {
                    props.updateItem(editedItem);
                    setEditedItem(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      props.updateItem(editedItem);
                      setEditedItem(null);
                    }
                  }}
                  autoFocus
                />
              ) : (
                <label onClick={() => setEditedItem(item)}>{item.item}</label>
              )}
              <button
                onClick={() => props.removeItem(item.id)}
                className="destroy"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllSelected;
