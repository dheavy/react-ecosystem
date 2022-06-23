import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, removeTodo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="button-container">
      <button className="completed-button">Mark as Completed</button>
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
