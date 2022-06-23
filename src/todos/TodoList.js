import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { loadTodos, markAsCompletedRequest, removeTodoRequest } from '../thunks';
import './TodoList.css';

export const TodoList = ({ todos = [], removeTodo, completeTodo, isLoading, loadTodos }) => {
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
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

  useEffect(() => {
    loadTodos()
  }, []);

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  completeTodo: id => dispatch(markAsCompletedRequest(id)),
  removeTodo: id => dispatch(removeTodoRequest(id)),
  loadTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
