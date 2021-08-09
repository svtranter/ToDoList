export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

let nextTaskId = 0;
export function addTask(text) {
  return {
    type: ADD_TASK,
    id: nextTaskId++,
    text,
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    id,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    id,
  };
}
