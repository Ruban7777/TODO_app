import React from "react";
import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems = ({ todoItems ,onDeleteClick}) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item, index) => (
        <Todoitem key={index} todoName={item.name} todoDate={item.dueDate}  onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
};

export default Todoitems;
