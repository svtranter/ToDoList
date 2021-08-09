import { connect } from "react-redux";
import { toggleTask } from "./actions";
import { removeTask } from "./actions";
import VisibleTasks from "./VisibleTasks";

function getVisibleTasks(tasks, filter) {
  switch (filter) {
    case "SHOW_COMPLETED":
      return tasks.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return tasks.filter((t) => !t.completed);
    case "SHOW_ALL":
    default:
      return tasks;
  }
}

function mapStateToProps(state) {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTaskClick: (id) => {
      dispatch(toggleTask(id));
    },
    removeClick: (id) => {
      dispatch(removeTask(id));
    },
  };
}

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTasks);

export default VisibleTaskList;
