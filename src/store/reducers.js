import {
  CREATE_TODO,
  MARK_TODO_AS_COMPLETED,
  REMOVE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE
} from './actions';

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;

    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;

    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }

    case MARK_TODO_AS_COMPLETED: {
      const { todo: updatedTodo } = payload;
      const newState = [...state];
      newState.splice(newState.findIndex(todo => todo.id === updatedTodo.id), 1, updatedTodo);
      return newState;
    }

    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return state.filter(todo => todo.id !== todoToRemove.id);
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }

    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_IN_PROGRESS: {
      return state;
    }

    default:
      return state;
  }
};
