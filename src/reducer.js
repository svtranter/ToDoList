import {
  VisibilityFilters,
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  SET_VISIBILITY_FILTER,
} from "./actions.js";
import { combineReducers } from "redux";

function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function taskReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          description: action.text,
          completed: false,
        },
      ];
    case REMOVE_TASK:
      return state.filter((value) => {
        return action.id !== value.id;
      });
    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          return Object.assign({}, task, {
            completed: !task.completed,
          });
        }
        return task;
      });
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  tasks: taskReducer,
});
