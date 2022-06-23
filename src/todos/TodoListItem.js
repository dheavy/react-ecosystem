import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, removeTodo, completeTodo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="button-container">
     {!todo.isCompleted && <button
        className="completed-button"
        onClick={() => completeTodo(todo.text)}
      >
        Mark as Completed
      </button>}
      <button
        className="remove-button"
        onClick={() => removeTodo(todo.text)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
