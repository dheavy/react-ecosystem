import React, { useState } from 'react';
import { createTodo } from '../store/actions';
import { connect } from 'react-redux';
import './NewTodoForm.css';

const NewTodoForm = ({ todos = [], createTodo }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new Todo..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={e => {
          const isDuplicate = todos.some(todo => todo.text === inputValue);
          if (isDuplicate) return;
          createTodo(inputValue);
          setInputValue('');
        }}
      >
        Create Todo
      </button>
    </div>
  )
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  createTodo: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
