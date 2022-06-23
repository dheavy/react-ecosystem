import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { completeTodo, removeTodo } from '../store/actions';
import './TodoList.css';

export const TodoList = ({ todos = [], removeTodo, completeTodo }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {
      todos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))
    }
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  completeTodo: text => dispatch(completeTodo(text)),
  removeTodo: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
