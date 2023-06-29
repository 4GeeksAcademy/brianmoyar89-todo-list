import React, { useState } from "react";

function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Escriba una tarea.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="TodoList">
      <h1>To Do List!</h1>
      <input
        type="text"
        placeholder="Add your task"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        onKeyDown={event => {
          if (event.key === "Enter") {
            addItem();
          }
        }}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.value}{" "}
            <button
              className="delete-button"
              onClick={() => deleteItem(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <p>Usted tiene {items.length} tarea(s) pendiente(s).</p>
    </div>
  );
}

export default TodoList;


