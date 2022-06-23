import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { removeTodo } from '../store/actions';
import './TodoList.css';

const TodoList = ({ todos = [], removeTodo }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {
      todos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
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
  removeTodo: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
