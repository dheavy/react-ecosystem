import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  completeTodo
} from '../store/actions'

export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (err) {
    dispatch(loadTodosFailure());
    displayAlert('Load Todos failed!');
  }
};

export const addTodoRequest = text => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const removeTodoRequest = id => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE',
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const markAsCompletedRequest = id => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
      method: 'POST',
    });
    const updatedTodo = await response.json();
    dispatch(completeTodo(updatedTodo));
  } catch (err) {
    dispatch(displayAlert(err));
  }
}

export const displayAlert = text => {
  alert(text);
};