import { CREATE_TODO, MARK_TODO_AS_COMPLETED, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false
      }
      return state.concat(newTodo);
    }

    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      const todoIndex = state.findIndex(todo => todo.text === text);
      if (todoIndex === -1) return state;
      const newState = [...state];
      newState[todoIndex].isCompleted = true;
      return newState;
    }

    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter(todo => todo.text !== text);
    }

    default:
      return state;
  }
};
