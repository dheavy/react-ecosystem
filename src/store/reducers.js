import {
  CREATE_TODO,
  MARK_TODO_AS_COMPLETED,
  REMOVE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE
} from './actions';

const initialState = { state: [], isLoading: false };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo)
      };
    }

    case MARK_TODO_AS_COMPLETED: {
      const { todo: updatedTodo } = payload;
      const data = [...state.data];
      data.splice(data.findIndex(todo => todo.id === updatedTodo.id), 1, updatedTodo);
      return {
        ...state,
        data
      };
    }

    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== todoToRemove.id)
      };
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        data: todos,
        isLoading: false
      };
    }

    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false
      }
    }

    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true
      }
    }

    default:
      return state;
  }
};
