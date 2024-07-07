import React from "react";

function Todoitem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row r-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger r-button"
            onClick={() => {
              onDeleteClick(todoName);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
