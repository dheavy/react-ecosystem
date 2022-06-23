import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {
  loadTodos,
  markAsCompletedRequest,
  removeTodoRequest
} from '../thunks';
import {
  getTodosLoading,
  getCompleteTodos,
  getIncompleteTodos
} from '../store/selectors';
import styled from 'styled-components';

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

export const TodoList = ({ completedTodos, incompletedTodos, removeTodo, completeTodo, isLoading, loadTodos }) => {
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete Todos</h3>
      {
        incompletedTodos.map((todo, i) => (
          <TodoListItem
            key={i}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))
      }
      <h3>Complete Todos</h3>
      {
        completedTodos.map((todo, i) => (
          <TodoListItem
            key={i}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))
      }
    </ListWrapper>
  );

  useEffect(() => {
    loadTodos()
  }, []);

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompleteTodos(state),
  incompletedTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
  completeTodo: id => dispatch(markAsCompletedRequest(id)),
  removeTodo: id => dispatch(removeTodoRequest(id)),
  loadTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
