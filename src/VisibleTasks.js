import React from "react";
import Table from "react-bootstrap/Table";
import Task from "./Task";

function VisibleTasks(props) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th> ID</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onClick={() => props.onTaskClick(task.id)}
              removeClick={() => props.removeClick(task.id)}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default VisibleTasks;
