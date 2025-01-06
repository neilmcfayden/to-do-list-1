import React, { useEffect, useState, useRef } from 'react';

function ToDoList() {

  const [items, setItems] = useState(["Walk", "Eat"]);
  const [newItem, setNewItem] = useState("");
  const updateRef = useRef("Edit to-do list below");


  function handleInputChange(event){
    setNewItem(event.target.value);
  }
// Function to handle the user text input to update usestate function with in put value

  function addItem(){
    if(newItem.trim() !== ""){
      setItems(i => [...i, newItem]);
      setNewItem("");
      updateRef.current = "Item Added";
    }
// takes the setNewItem value and adds this to the end of the items array. ie adds the item to the list


  }

  function deleteItem(index){
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    updateRef.current = "Item Removed!";
  }
// filters for the index of all the items we do not want to remove, and creates new array updated items. This value is then used to reset the item array state.


  function moveItemUp(index){
    if(index > 0) {
      const updatedItems = [...items];
      [updatedItems[index], updatedItems[index - 1]] = [updatedItems[index-1], updatedItems[index]];
      setItems(updatedItems);
      updateRef.current = "Item Moved Up!";
    }
// We swap the array index of 2 items to switch their place in the items array


  }

  function moveItemDown(index){
    if(index < items.length-1) {
      const updatedItems = [...items];
      [updatedItems[index], updatedItems[index + 1]] = [updatedItems[index+1], updatedItems[index]];
      setItems(updatedItems);
      updateRef.current = "Item Moved Down!";
    }
  }
// same as above, but in reverse. We also update the useRef.current, to provide the uder with a new message.

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