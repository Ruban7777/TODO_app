import React, { useState } from "react";
import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./APP.css";

function App() {
  const initialTodoItems = []; // Define initialTodoItems
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`new item added: ${itemName} date: ${itemDate}`);

    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName); // filter method returns new array
    setTodoItems(newTodoItems);
  };

  return (
    <center>
      <Appname />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage todoItems={todoItems} />}
      <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
