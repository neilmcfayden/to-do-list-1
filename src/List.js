import React, { useEffect, useState, useRef } from 'react';

function ToDoList() {

  const [items, setItems] = useState(["Walk", "Eat"]);
  const [newItem, setNewItem] = useState("");
  const updateRef = useRef("Edit to-do list below");


  function handleInputChange(event){
    setNewItem(event.target.value);

  }
  function addItem(){
    if(newItem.trim() !== ""){
      setItems(i => [...i, newItem]);
      setNewItem("");
      updateRef.current = "Item Added";
    }

  }

  function deleteItem(index){
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    updateRef.current = "Item Removed!";
  }

  function moveItemUp(index){
    if(index > 0) {
      const updatedItems = [...items];
      [updatedItems[index], updatedItems[index - 1]] = [updatedItems[index-1], updatedItems[index]];
      setItems(updatedItems);
      updateRef.current = "Item Moved Up!";
    }

  }

  function moveItemDown(index){
    if(index < items.length-1) {
      const updatedItems = [...items];
      [updatedItems[index], updatedItems[index + 1]] = [updatedItems[index+1], updatedItems[index]];
      setItems(updatedItems);
      updateRef.current = "Item Moved Down!";
    }
  }


  return (
    <div className="to-do-list">
      <div className="title-div">
        <h1>To-Do-List</h1>
        <p>You currently have {items.length} task to complete!</p>
        <p>{updateRef.current}</p>
      </div>
      <div classname="input-div">
        <input
          className="input"
          type="text"
          maxLength={20}
          placeholder="Enter an Item"
          value={newItem}
          onChange={handleInputChange}/>
        <button
        className="add-button"
        onClick={addItem}>
          ➕
        </button>
      </div>
      <ol className="list">
        {items.map((item, index) =>
          <li key={index} className='list-items'>
            <span className="list-item">{index+1}. {item}</span>
            <div className='item-buttons'>
              <button
                classname="delete-button"
                onClick={() => deleteItem(index)}>
                🗑️
              </button>
              <button
                classname="move-button"
                onClick={() => moveItemUp(index)}>
                ⬆️
              </button>
              <button
                classname="move-button"
                onClick={() => moveItemDown(index)}>
                ⬇️
              </button>
            </div>
          </li>
        )}
      </ol>
    </div>
  )

};
export default ToDoList;